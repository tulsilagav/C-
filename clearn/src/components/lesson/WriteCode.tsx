"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface WriteCodeProps {
  question: Question;
}

export const WriteCode: React.FC<WriteCodeProps> = ({ question }) => {
  const [code, setCode] = useState<string>(question.codeText || "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World\");\n    return 0;\n}\n");
  const [output, setOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running...");
    setTimeout(() => {
      setOutput("Mock run complete. Configure Judge0 to execute real code.");
      setIsRunning(false);
    }, 750);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{question.text}</h3>
      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        className="mt-4 min-h-[220px] w-full rounded-2xl border border-gray-300 bg-gray-50 p-4 font-mono text-sm text-gray-800 focus:border-duo-blue focus:ring-2 focus:ring-duo-blue/20"
      />
      <div className="mt-6 flex items-center justify-between gap-4">
        <Button onClick={runCode} isLoading={isRunning} variant="primary" size="md">
          Run Code
        </Button>
        {output && <span className="text-sm text-gray-700">{output}</span>}
      </div>
    </div>
  );
};

export default WriteCode;
