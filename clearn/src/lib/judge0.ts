interface Judge0Submission {
  source_code: string;
  language_id: number; // 50 = C
  stdin?: string;
  expected_output?: string;
}

interface Judge0Result {
  stdout?: string;
  stderr?: string;
  compile_output?: string;
  status_id: number;
  message?: string;
}

export async function submitCode(code: string, input: string = ""): Promise<Judge0Result> {
  const apiKey = process.env.JUDGE0_API_KEY;
  const apiHost = process.env.JUDGE0_API_HOST;

  if (!apiKey || !apiHost) {
    throw new Error("Judge0 API credentials not configured");
  }

  // Encode the code and input in base64
  const encodedCode = Buffer.from(code).toString("base64");
  const encodedInput = Buffer.from(input).toString("base64");

  const submission: any = {
    source_code: encodedCode,
    language_id: 50, // C
  };

  if (input) {
    submission.stdin = encodedInput;
  }

  try {
    // Submit the code
    const submitResponse = await fetch("https://" + apiHost + "/submissions", {
      method: "POST",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": apiHost,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });

    const submitData: any = await submitResponse.json();
    const token = submitData.token;

    // Poll for results
    let result: Judge0Result | null = null;
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms

      const statusResponse = await fetch(
        "https://" + apiHost + "/submissions/" + token,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key": apiKey,
            "x-rapidapi-host": apiHost,
          },
        }
      );

      const statusData: any = await statusResponse.json();

      if (statusData.status_id >= 3) {
        // Status 3+ means the submission is done
        result = {
          stdout: statusData.stdout ? Buffer.from(statusData.stdout, "base64").toString() : "",
          stderr: statusData.stderr ? Buffer.from(statusData.stderr, "base64").toString() : "",
          compile_output: statusData.compile_output
            ? Buffer.from(statusData.compile_output, "base64").toString()
            : "",
          status_id: statusData.status_id,
          message: statusData.status?.description || "Execution complete",
        };
        break;
      }

      attempts++;
    }

    if (!result) {
      return {
        stderr: "Execution timeout",
        status_id: 0,
        message: "The code took too long to execute",
      };
    }

    return result;
  } catch (error) {
    return {
      stderr: String(error),
      status_id: 0,
      message: "Error executing code",
    };
  }
}

// Mock version if Judge0 is not available
export async function submitCodeMocked(code: string, input: string = ""): Promise<Judge0Result> {
  // For now, just return a mock success
  return {
    stdout: "Program executed successfully (mock)",
    stderr: "",
    compile_output: "",
    status_id: 4,
    message: "Code executed (mock mode - configure Judge0 API to run real code)",
  };
}
