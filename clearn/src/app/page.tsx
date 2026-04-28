import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-duo-green/10 via-white to-duo-blue/10">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🕊️</span>
            <span className="bg-gradient-to-r from-duo-green to-duo-blue bg-clip-text text-transparent">
              CLearn
            </span>
          </Link>
          <Link href="/login">
            <Button variant="primary" size="md">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Learn C <span className="bg-gradient-to-r from-duo-green to-duo-blue bg-clip-text text-transparent">
            the fun way
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master the C programming language through bite-sized lessons, interactive
          challenges, and gamified learning. Earn XP, build streaks, and compete on
          leaderboards.
        </p>
        <Link href="/learn">
          <Button variant="primary" size="lg">
            Start Learning →
          </Button>
        </Link>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Why CLearn?</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h3 className="font-bold text-lg mb-2">Hearts System</h3>
            <p className="text-gray-600 text-sm">
              Get 5 hearts per day. Lose one for wrong answers. Refill anytime.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-lg mb-2">XP & Streaks</h3>
            <p className="text-gray-600 text-sm">
              Earn XP with every lesson. Build daily streaks for bonus rewards.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="font-bold text-lg mb-2">Leaderboards</h3>
            <p className="text-gray-600 text-sm">
              Compete globally with weekly rankings. Climb through Bronze to Diamond.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg border border-gray-200 text-center">
            <div className="text-4xl mb-4">💎</div>
            <h3 className="font-bold text-lg mb-2">Gems Shop</h3>
            <p className="text-gray-600 text-sm">
              Buy streak freezes, heart refills, and double XP boosters.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-4 py-20 bg-blue-50 rounded-2xl my-20">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-duo-green/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📚</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Choose a Lesson</h3>
            <p className="text-gray-600">
              Browse 12 units covering C fundamentals to mastery, from variables to
              linked lists.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-duo-blue/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Answer Questions</h3>
            <p className="text-gray-600">
              Solve 6 different question types: multiple choice, code output, write code, and more.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-duo-green/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🎉</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Earn Rewards</h3>
            <p className="text-gray-600">
              Get XP, gems, and hearts. Complete lessons to unlock the next unit.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Preview */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive C Curriculum
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { num: 1, title: "C Fundamentals", color: "bg-duo-green" },
            { num: 2, title: "Operators", color: "bg-duo-blue" },
            { num: 3, title: "Control Flow", color: "bg-duo-red" },
            { num: 4, title: "Functions", color: "bg-duo-yellow" },
            { num: 5, title: "Arrays & Strings", color: "bg-duo-purple" },
            { num: 6, title: "Pointers", color: "bg-duo-orange" },
          ].map((unit) => (
            <div key={unit.num} className={`p-6 rounded-lg text-white ${unit.color} shadow-lg`}>
              <div className="text-3xl font-bold mb-2">Unit {unit.num}</div>
              <h3 className="font-bold text-lg">{unit.title}</h3>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">
          Plus 6 more units covering dynamic memory, structs, file I/O, and advanced C!
        </p>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to learn?</h2>
        <Link href="/learn">
          <Button variant="success" size="lg">
            Get Started →
          </Button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20 py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 CLearn. Learn C the fun way.</p>
        </div>
      </footer>
    </div>
  );
}
