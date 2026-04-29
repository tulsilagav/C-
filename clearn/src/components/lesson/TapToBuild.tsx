"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface TapToBuildProps {
  question: Question;
  onAnswer?: (questionId: string, correct: boolean, answer: string) => void;
}

export const TapToBuild: React.FC<TapToBuildProps> = ({ question, onAnswer }) => {
  const options = question.options ? JSON.parse(question.options) : [];
  const correctAnswer = question.correctAnswer ? JSON.parse(question.correctAnswer) : [];
  const [selected, setSelected] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const toggleOption = (option: string) => {
    setSelected(prev =>
      prev.includes(option)
        ? prev.filter(item => item !== option)
        : [...prev, option]
    );
  };

  const checkAnswer = () => {
    if (selected.length === 0) {
      setFeedback("Please select some options.");
      return;
    }
    const correct = JSON.stringify(selected) === JSON.stringify(correctAnswer);
    setIsCorrect(correct);
    setFeedback(correct ? "Correct!" : `Incorrect. ${question.explanation || "Try again."}`);

    // Call onAnswer callback if provided
    if (onAnswer) {
      onAnswer(question.id, correct, JSON.stringify(selected));
    }
  };

  const reset = () => {
    setSelected([]);
    setFeedback(null);
    setIsCorrect(null);
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{question.text}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() => toggleOption(option)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              selected.includes(option)
                ? "border-duo-green bg-duo-green text-white"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
            disabled={isCorrect !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <div className={`mt-4 min-h-[40px] rounded-lg border-2 border-dashed p-3 ${
        isCorrect === true ? "border-green-300 bg-green-50" :
        isCorrect === false ? "border-red-300 bg-red-50" :
        "border-gray-200"
      }`}>
        <div className="flex flex-wrap gap-1">
          {selected.map((item, index) => (
            <span
              key={index}
              className={`rounded px-2 py-1 text-sm ${
                isCorrect === true ? "bg-green-600 text-white" :
                isCorrect === false ? "bg-red-600 text-white" :
                "bg-duo-green text-white"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        {isCorrect === null ? (
          <Button onClick={checkAnswer} variant="primary" size="md">
            Check Answer
          </Button>
        ) : (
          <Button onClick={reset} variant="secondary" size="md">
            Try Again
          </Button>
        )}
        {feedback && (
          <span className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
            {feedback}
          </span>
        )}
      </div>
    </div>
  );
};

export default TapToBuild;