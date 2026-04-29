import { QuestionType } from "@prisma/client";
import { prisma } from "../src/lib/prisma.js";

const curriculum = [
  {
    unitNumber: 1,
    title: "C Fundamentals",
    description: "Master the basics: Hello World, Variables, Data Types, and I/O",
    color: "#58CC02",
    lessons: [
      {
        lessonNumber: 1,
        title: "Hello World",
        description: "Your first C program",
        difficulty: 1,
        xpReward: 10,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "What does the following C code print?\n\n#include <stdio.h>\nint main() {\n  printf(\"Hello, World!\");\n  return 0;\n}",
            explanation: "The printf function outputs the text to the console.",
            options: JSON.stringify([
              "Hello, World!",
              "Hello World",
              "Error: undefined",
              "Nothing",
            ]),
          } as any,
          {
            questionNumber: 2,
            type: QuestionType.TAP_TO_BUILD,
            text: "Arrange the words to create a valid C program that prints 'Hi'",
            explanation:
              "The correct order is: #include <stdio.h>, int main(), {, printf(\"Hi\"), return 0, }",
            options: JSON.stringify([
              "#include <stdio.h>",
              "int main() {",
              'printf("Hi");',
              "return 0;",
              "}",
            ]),
          } as any,
        ],
      },
      {
        lessonNumber: 2,
        title: "Variables",
        description: "Learn how to declare and use variables",
        difficulty: 1,
        xpReward: 10,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.FILL_BLANK,
            text: "Complete the code:\nint _____ = 42;",
            explanation: "Variables store data. The name can be any valid identifier like 'x', 'age', 'count', etc.",
            options: "",
          } as any,
          {
            questionNumber: 2,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "Which is a valid variable declaration?",
            explanation: "Valid C variable names must start with a letter or underscore.",
            options: JSON.stringify([
              "int age = 25;",
              "int 123var;",
              "int class;",
              "int my-var;",
            ]),
          } as any,
        ],
      },
      {
        lessonNumber: 3,
        title: "Data Types",
        description: "Understand int, float, char, and double",
        difficulty: 1,
        xpReward: 10,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "Which data type stores decimal numbers?",
            explanation: "float and double store decimal numbers. float is 4 bytes, double is 8 bytes.",
            options: JSON.stringify(["int", "float", "char", "void"]),
          } as any,
        ],
      },
      {
        lessonNumber: 4,
        title: "Input & Output",
        description: "Use scanf and printf for I/O operations",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: "What does this print?\n\nint x = 5;\nprintf(\"%d\", x);",
            explanation: "%d is the format specifier for integers.",
            options: JSON.stringify(["5", "x", "%d", "Error"]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 2,
    title: "Operators",
    description: "Master arithmetic, comparison, and logical operators",
    color: "#1CB0F6",
    lessons: [
      {
        lessonNumber: 1,
        title: "Arithmetic Operators",
        description: "Learn +, -, *, /, %",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: "What does this code print?\n\nint result = 10 + 5 * 2;\nprintf(\"%d\", result);",
            explanation: "Multiplication has higher precedence than addition. So: 5 * 2 = 10, then 10 + 10 = 20",
            options: JSON.stringify(["20", "30", "25", "15"]),
          } as any,
        ],
      },
      {
        lessonNumber: 2,
        title: "Comparison Operators",
        description: "Use ==, !=, <, >, <=, >=",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "What does 5 > 3 return?",
            explanation: "5 is greater than 3, so the comparison is true.",
            options: JSON.stringify(["true", "false", "1 (in C)", "Error"]),
          } as any,
        ],
      },
      {
        lessonNumber: 3,
        title: "Logical Operators",
        description: "Combine conditions with &&, ||, !",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "What does (5 > 3) && (2 < 1) return?",
            explanation: "The first part is true, but the second is false. AND (&&) requires both to be true.",
            options: JSON.stringify(["true", "false", "1", "0"]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 3,
    title: "Control Flow",
    description: "Master if/else, loops, and switch statements",
    color: "#FF6B6B",
    lessons: [
      {
        lessonNumber: 1,
        title: "If/Else",
        description: "Conditional execution with if and else",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: "What does this print?\n\nint x = 10;\nif (x > 5) {\n  printf(\"big\");\n} else {\n  printf(\"small\");\n}",
            explanation: "Since 10 > 5 is true, the if block executes.",
            options: JSON.stringify(["big", "small", "both", "nothing"]),
          } as any,
        ],
      },
      {
        lessonNumber: 2,
        title: "For Loops",
        description: "Repeat code with for loops",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: "How many times does this loop run?\n\nfor (int i = 0; i < 5; i++) {\n  printf(\"x\");\n}",
            explanation: "The loop runs for i = 0, 1, 2, 3, 4. That's 5 times.",
            options: JSON.stringify(["3", "4", "5", "6"]),
          } as any,
        ],
      },
      {
        lessonNumber: 3,
        title: "While Loops",
        description: "Repeat code while a condition is true",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.FILL_BLANK,
            text: "Complete the while loop:\nint i = 0;\nwhile (i < 5) {\n  printf(\"%d \", i);\n  _____;\n}",
            explanation: "You need to increment i (i++) to avoid an infinite loop.",
            options: "",
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 4,
    title: "Functions",
    description: "Define and call functions with parameters and returns",
    color: "#FFEB3B",
    lessons: [
      {
        lessonNumber: 1,
        title: "Function Basics",
        description: "Declare and call functions",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.TAP_TO_BUILD,
            text: "Arrange to create a function that returns 5",
            explanation:
              "A function needs a return type, name, parameters in parentheses, and a body.",
            options: JSON.stringify([
              "int",
              "getNum()",
              "{",
              "return 5;",
              "}",
            ]),
          } as any,
        ],
      },
      {
        lessonNumber: 2,
        title: "Parameters",
        description: "Pass data to functions",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: 'What does this print?\n\nint add(int a, int b) {\n  return a + b;\n}\n\nint main() {\n  printf(\"%d\", add(3, 4));\n}',
            explanation: "The function add returns 3 + 4 = 7",
            options: JSON.stringify(["3", "4", "7", "8"]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 5,
    title: "Arrays",
    description: "Work with arrays and strings",
    color: "#9C27B0",
    lessons: [
      {
        lessonNumber: 1,
        title: "Array Basics",
        description: "Declare and access array elements",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: "What does this print?\n\nint arr[3] = {10, 20, 30};\nprintf(\"%d\", arr[1]);",
            explanation: "Array indexing is 0-based. arr[1] is the second element, which is 20.",
            options: JSON.stringify(["10", "20", "30", "Error"]),
          } as any,
        ],
      },
      {
        lessonNumber: 2,
        title: "Strings",
        description: "Work with character arrays as strings",
        difficulty: 2,
        xpReward: 15,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "How do you declare a string in C?",
            explanation: "Strings in C are arrays of characters ending with a null terminator.",
            options: JSON.stringify([
              'char str[20] = "Hello";',
              'string str = "Hello";',
              'str = "Hello";',
              'char str = "Hello";',
            ]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 6,
    title: "Pointers",
    description: "Master memory addresses and pointer operations",
    color: "#FF8C00",
    lessons: [
      {
        lessonNumber: 1,
        title: "Pointer Basics",
        description: "Declare pointers and use & and *",
        difficulty: 3,
        xpReward: 20,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.FILL_BLANK,
            text: "Complete: int x = 5;\nint* p = _____; // Get address of x",
            explanation: "The & operator gets the address of a variable.",
            options: "",
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 7,
    title: "Dynamic Memory",
    description: "Allocate and free memory with malloc/free",
    color: "#58CC02",
    lessons: [
      {
        lessonNumber: 1,
        title: "malloc and free",
        description: "Dynamically allocate memory",
        difficulty: 3,
        xpReward: 20,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.FILL_BLANK,
            text: "Allocate memory for 10 integers:\nint* arr = (int*) _____; (10 * sizeof(int));",
            explanation: "malloc allocates memory and must be cast to the appropriate pointer type.",
            options: "",
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 8,
    title: "Structs",
    description: "Create custom data structures with struct",
    color: "#1CB0F6",
    lessons: [
      {
        lessonNumber: 1,
        title: "Define and Use Structs",
        description: "Create composite data types",
        difficulty: 3,
        xpReward: 20,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.TAP_TO_BUILD,
            text: "Arrange to define a Person struct",
            explanation:
              "Struct members are defined with types and names, enclosed in braces.",
            options: JSON.stringify([
              "struct Person {",
              "char name[50];",
              "int age;",
              "}",
            ]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 9,
    title: "File I/O",
    description: "Read and write files with fopen and fclose",
    color: "#FF6B6B",
    lessons: [
      {
        lessonNumber: 1,
        title: "File Operations",
        description: "Open, read, and write files",
        difficulty: 3,
        xpReward: 20,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.FILL_BLANK,
            text: 'Open a file for reading:\nFILE* file = _____(\"data.txt\", \"r\");',
            explanation: "fopen opens a file. The mode 'r' is for reading.",
            options: "",
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 10,
    title: "Preprocessor",
    description: "Master #define, macros, and includes",
    color: "#FFEB3B",
    lessons: [
      {
        lessonNumber: 1,
        title: "Defines and Macros",
        description: "Use preprocessor directives",
        difficulty: 3,
        xpReward: 20,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.CODE_OUTPUT,
            text: "#define PI 3.14\nprintf(\"%.2f\", PI);",
            explanation: "#define creates a macro that replaces every occurrence.",
            options: JSON.stringify(["3.14", "3", "PI", "Error"]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 11,
    title: "Advanced C",
    description: "Function pointers, callbacks, and linked lists",
    color: "#9C27B0",
    lessons: [
      {
        lessonNumber: 1,
        title: "Function Pointers",
        description: "Store and call functions via pointers",
        difficulty: 4,
        xpReward: 25,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "How do you declare a function pointer?",
            explanation:
              "Function pointers require the return type, parameter types, and a name.",
            options: JSON.stringify([
              "int (*func)(int)",
              "int *func(int)",
              "func *int(int)",
              "*int func(int)",
            ]),
          } as any,
        ],
      },
    ],
  },
  {
    unitNumber: 12,
    title: "C Mastery",
    description: "Multi-file projects and final challenge",
    color: "#FF8C00",
    lessons: [
      {
        lessonNumber: 1,
        title: "Multi-file Projects",
        description: "Organize code across multiple files",
        difficulty: 4,
        xpReward: 25,
        questions: [
          {
            questionNumber: 1,
            type: QuestionType.MULTIPLE_CHOICE,
            text: "What is the purpose of header files (.h)?",
            explanation:
              "Header files contain declarations. They are included in other files to access functions and structs.",
            options: JSON.stringify([
              "Declare functions and structs",
              "Implement functions",
              "Store global variables",
              "Execute the main program",
            ]),
          } as any,
        ],
      },
    ],
  },
];

async function main() {
  console.log("🌱 Seeding curriculum...");

  for (const unitData of curriculum) {
    const unit = await prisma.unit.upsert({
      where: { unitNumber: unitData.unitNumber },
      update: {},
      create: {
        unitNumber: unitData.unitNumber,
        title: unitData.title,
        description: unitData.description,
        color: unitData.color,
      },
    });

    for (const lessonData of unitData.lessons) {
      const lesson = await prisma.lesson.upsert({
        where: {
          unitId_lessonNumber: {
            unitId: unit.id,
            lessonNumber: lessonData.lessonNumber,
          },
        },
        update: {},
        create: {
          unitId: unit.id,
          lessonNumber: lessonData.lessonNumber,
          title: lessonData.title,
          description: lessonData.description,
          difficulty: lessonData.difficulty,
          xpReward: lessonData.xpReward,
        },
      });

      for (const questionData of lessonData.questions) {
        await prisma.question.upsert({
          where: {
            lessonId_questionNumber: {
              lessonId: lesson.id,
              questionNumber: questionData.questionNumber,
            },
          },
          update: {},
          create: {
            lessonId: lesson.id,
            questionNumber: questionData.questionNumber,
            type: questionData.type,
            text: questionData.text,
            explanation: questionData.explanation,
            options: questionData.options,
            codeText: questionData.codeText || null,
            testCases: questionData.testCases || null,
          },
        });
      }
    }

    console.log(`✓ Unit ${unitData.unitNumber}: ${unitData.title}`);
  }

  console.log("✅ Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
