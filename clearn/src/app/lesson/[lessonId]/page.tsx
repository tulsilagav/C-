import { notFound } from "next/navigation";
import { findLessonById } from "@/lib/curriculum";
import { QuestionRenderer } from "@/components/lesson/QuestionRenderer";

interface LessonPageProps {
  params: {
    lessonId: string;
  };
}

export default function LessonPage({ params }: LessonPageProps) {
  const lessonId = params.lessonId;
  const lessonData = findLessonById(lessonId);

  if (!lessonData) {
    notFound();
  }

  const { unit, lesson } = lessonData;

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-duo-green font-semibold">{unit.title}</p>
            <h1 className="text-4xl font-bold text-gray-900">{lesson.title}</h1>
            <p className="mt-3 text-gray-600 max-w-2xl">{lesson.description}</p>
          </div>
          <div className="rounded-3xl bg-duo-blue/10 px-5 py-3 text-duo-blue font-semibold">
            Unit {unit.unitNumber}
          </div>
        </div>
      </section>

      {lesson.questions.map((question) => (
        <QuestionRenderer key={question.id} question={question} />
      ))}
    </div>
  );
}
