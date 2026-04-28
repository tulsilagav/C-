"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface MultipleChoiceProps {
  question: Question;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({ question }) => {
  const options = question.options ? JSON.parse(question.options) : [];
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const checkAnswer = () => {
    if (selected === null) {
      setFeedback("Please select an answer.");
      return;
    }
    const correct = selected === 0;
    setFeedback(correct ? "Correct!" : "Try again." );
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{question.text}</h3>
      <div className="mt-4 grid gap-3">
        {options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
              selected === index ? "border-duo-green bg-duo-green/10" : "border-gray-200 bg-white hover:border-gray-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <Button onClick={checkAnswer} variant="primary" size="md">
          Check Answer
        </Button>
        {feedback && <span className="text-sm text-gray-700">{feedback}</span>}
      </div>
    </div>
  );
};

export default MultipleChoice;
