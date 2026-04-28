"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface CodeOutputProps {
  question: Question;
}

export const CodeOutput: React.FC<CodeOutputProps> = ({ question }) => {
  const options = question.options ? JSON.parse(question.options) : [];
  const [selection, setSelection] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const checkResult = () => {
    if (selection === null) {
      setResult("Choose an output option first.");
      return;
    }
    setResult(selection === 0 ? "Correct!" : "Not quite — try again.");
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{question.text}</h3>
      <div className="mt-4 grid gap-3">
        {options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => setSelection(index)}
            className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
              selection === index ? "border-duo-green bg-duo-green/10" : "border-gray-200 bg-white hover:border-gray-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <Button onClick={checkResult} variant="primary" size="md">
          Check Output
        </Button>
        {result && <span className="text-sm text-gray-700">{result}</span>}
      </div>
    </div>
  );
};

export default CodeOutput;
