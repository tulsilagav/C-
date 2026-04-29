"use client";

import { Question } from "@/types";
import MultipleChoice from "@/components/lesson/MultipleChoice";
import TapToBuild from "@/components/lesson/TapToBuild";
import FillBlank from "@/components/lesson/FillBlank";
import CodeOutput from "@/components/lesson/CodeOutput";
import BugFix from "@/components/lesson/BugFix";
import WriteCode from "@/components/lesson/WriteCode";

interface QuestionRendererProps {
  question: Question;
  onAnswer?: (questionId: string, correct: boolean, answer: string) => void;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question, onAnswer }) => {
  switch (question.type) {
    case "MULTIPLE_CHOICE":
      return <MultipleChoice question={question} onAnswer={onAnswer} />;
    case "TAP_TO_BUILD":
      return <TapToBuild question={question} onAnswer={onAnswer} />;
    case "FILL_BLANK":
      return <FillBlank question={question} onAnswer={onAnswer} />;
    case "CODE_OUTPUT":
      return <CodeOutput question={question} onAnswer={onAnswer} />;
    case "BUG_FIX":
      return <BugFix question={question} onAnswer={onAnswer} />;
    case "WRITE_CODE":
      return <WriteCode question={question} onAnswer={onAnswer} />;
    default:
      return <div className="rounded-3xl border border-gray-200 bg-white p-6 text-gray-600">Unsupported question type.</div>;
  }
};

export default QuestionRenderer;
