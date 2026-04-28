"use client";

import React, { useState } from "react";
import { Question } from "@/types";
import { Button } from "@/components/ui/Button";

interface FillBlankProps {
  question: Question;
}

export const FillBlank: React.FC<FillBlankProps> = ({ question }) => {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const submitAnswer = () => {
    if (!answer.trim()) {
      setFeedback("Please fill in your answer.");
      return;
    }
    setFeedback("Answer submitted. Review on the next step.");
  };

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{question.text}</h3>
      <input
        type="text"
        value={answer}
        onChange={(event) => setAnswer(event.target.value)}
        className="mt-4 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-duo-blue focus:ring-2 focus:ring-duo-blue/20"
        placeholder="Type your answer here"
      />
      <div className="mt-6 flex items-center justify-between gap-4">
        <Button onClick={submitAnswer} variant="primary" size="md">
          Submit
        </Button>
        {feedback && <span className="text-sm text-gray-700">{feedback}</span>}
      </div>
    </div>
  );
};

export default FillBlank;
