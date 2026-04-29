"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface MultipleChoiceProps {
  question: Question;
  onAnswer?: (questionId: string, correct: boolean, answer: string) => void;
}

export const MultipleChoice: React.FC<MultipleChoiceProps> = ({ question, onAnswer }) => {
  const options = question.options ? JSON.parse(question.options) : [];
  const correctAnswer = question.correctAnswer ? parseInt(question.correctAnswer) : 0;
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const checkAnswer = () => {
    if (selected === null) {
      setFeedback("Please select an answer.");
      return;
    }
    const correct = selected === correctAnswer;
    setIsCorrect(correct);
    setFeedback(correct ? "Correct!" : `Incorrect. ${question.explanation || "Try again."}`);

    // Call onAnswer callback if provided
    if (onAnswer) {
      onAnswer(question.id, correct, selected.toString());
    }
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
              selected === index
                ? isCorrect === true && selected === correctAnswer
                  ? "border-green-500 bg-green-50"
                  : isCorrect === false && selected !== correctAnswer
                  ? "border-red-500 bg-red-50"
                  : "border-duo-green bg-duo-green/10"
                : "border-gray-200 bg-white hover:border-gray-400"
            }`}
            disabled={isCorrect !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        {isCorrect === null ? (
          <Button onClick={checkAnswer} variant="primary" size="md">
            Check Answer
          </Button>
        ) : (
          <Button onClick={() => { setSelected(null); setFeedback(null); setIsCorrect(null); }} variant="secondary" size="md">
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

export default MultipleChoice;
