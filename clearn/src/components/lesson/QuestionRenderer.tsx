"use client";

import { Question } from "@/types";
import MultipleChoice from "@/components/lesson/MultipleChoice";
import FillBlank from "@/components/lesson/FillBlank";
import CodeOutput from "@/components/lesson/CodeOutput";
import WriteCode from "@/components/lesson/WriteCode";

interface QuestionRendererProps {
  question: Question;
}

export const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question }) => {
  switch (question.type) {
    case "MULTIPLE_CHOICE":
      return <MultipleChoice question={question} />;
    case "FILL_BLANK":
      return <FillBlank question={question} />;
    case "CODE_OUTPUT":
      return <CodeOutput question={question} />;
    case "WRITE_CODE":
      return <WriteCode question={question} />;
    default:
      return <div className="rounded-3xl border border-gray-200 bg-white p-6 text-gray-600">Unsupported question type.</div>;
  }
};

export default QuestionRenderer;
