export const curriculum = [
  {
    id: "unit-1",
    unitNumber: 1,
    title: "C Fundamentals",
    description: "Hello World, variables, data types, and I/O.",
    color: "#58CC02",
    lessons: [
      {
        id: "lesson-1-1",
        lessonNumber: 1,
        title: "Hello World",
        description: "Write your first C program.",
        difficulty: 1,
        xpReward: 10,
        questions: [
          {
            id: "q-1",
            questionNumber: 1,
            type: "MULTIPLE_CHOICE",
            text: "What does this print?\n#include <stdio.h>\nint main() { printf(\"Hello, World!\"); return 0; }",
            explanation: "printf prints the string to standard output.",
            options: JSON.stringify(["Hello, World!", "Hello World", "Error", "Nothing"]),
            correctAnswer: "0",
          },
        ],
      },
      {
        id: "lesson-1-2",
        lessonNumber: 2,
        title: "Variables",
        description: "Store and use data with variables.",
        difficulty: 1,
        xpReward: 10,
        questions: [
          {
            id: "q-2",
            questionNumber: 1,
            type: "MULTIPLE_CHOICE",
            text: "Which of these is a valid C variable declaration?",
            explanation: "Variables must start with a letter or underscore.",
            options: JSON.stringify(["int age = 25;", "int 123age;", "int my-age;", "int &value;"]),
            correctAnswer: "0",
          },
        ],
      },
    ],
  },
  {
    id: "unit-2",
    unitNumber: 2,
    title: "Operators",
    description: "Arithmetic, comparisons, and logical expressions.",
    color: "#1CB0F6",
    lessons: [
      {
        id: "lesson-2-1",
        lessonNumber: 1,
        title: "Arithmetic Operators",
        description: "Calculate values with +, -, *, and /.",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            id: "q-3",
            questionNumber: 1,
            type: "CODE_OUTPUT",
            text: "What is printed by this code?\nint a = 5; int b = 2; printf(\"%d\", a * b + 3);",
            explanation: "Multiplication runs before addition.",
            options: JSON.stringify(["13", "16", "10", "7"]),
            correctAnswer: "0",
          },
        ],
      },
    ],
  },
];

export function findLessonById(lessonId: string) {
  for (const unit of curriculum) {
    const lesson = unit.lessons.find((lesson) => lesson.id === lessonId);
    if (lesson) {
      return { unit, lesson };
    }
  }
  return null;
}
