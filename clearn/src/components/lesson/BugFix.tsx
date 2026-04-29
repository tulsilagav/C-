"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface BugFixProps {
  question: Question;
  onAnswer?: (questionId: string, correct: boolean, answer: string) => void;
}

export const BugFix: React.FC<BugFixProps> = ({ question, onAnswer }) => {
  const [code, setCode] = useState<string>(question.codeText || "#include <stdio.h>\n\nint main() {\n    printf(\"Hello World\");\n    return 0;\n}\n");
  const [feedback, setFeedback] = useState<string | null>(null);

  const checkCode = () => {
    // Simple check for common bugs - this should be more sophisticated
    const correct = code.includes("return 0;") && !code.includes("printf(\"Hello World\")");
    setFeedback(correct ? "Bug fixed!" : `Not quite. ${question.explanation || "Check for syntax errors."}`);

    // Call onAnswer callback if provided
    if (onAnswer) {
      onAnswer(question.id, correct, code);
    }
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
        <Button onClick={checkCode} variant="primary" size="md">
          Check for Bugs
        </Button>
        {feedback && <span className="text-sm text-gray-700">{feedback}</span>}
      </div>
    </div>
  );
};

export default BugFix;