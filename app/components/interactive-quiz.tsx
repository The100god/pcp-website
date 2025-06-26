"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { CheckCircle, XCircle, HelpCircle } from "lucide-react";

const quizQuestions = [
  {
    id: 1,
    question: "What is the SI unit of electric current?",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    correct: 1,
    explanation: "The SI unit of electric current is Ampere (A), named after André-Marie Ampère.",
    subject: "Physics",
  },
  {
    id: 2,
    question: "Which of the following is NOT a greenhouse gas?",
    options: ["Carbon dioxide", "Methane", "Nitrogen", "Water vapor"],
    correct: 2,
    explanation: "Nitrogen (N₂) is not a greenhouse gas. It makes up 78% of Earth's atmosphere but doesn't trap heat.",
    subject: "Chemistry",
  },
  {
    id: 3,
    question: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correct: 0,
    explanation: "The derivative of sin(x) with respect to x is cos(x).",
    subject: "Mathematics",
  },
  {
    id: 4,
    question: "Which organelle is known as the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Endoplasmic Reticulum"],
    correct: 2,
    explanation:
      "Mitochondria are called the powerhouse of the cell because they produce ATP (energy) through cellular respiration.",
    subject: "Biology",
  },
];

export function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const router = useRouter();

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const handleLoginRedirect = () => {
    router.push("/login");
  };

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    return (
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center">
            <CardHeader>
              <div className="mx-auto mb-4">
                {/* <Trophy className="h-16 w-16 text-yellow-500" /> */}
                <img src="/icons/win.gif" alt="win" className="w-20 h-20 bg-transparent"/>
              </div>
              <CardTitle className="text-2xl">Quiz Completed!</CardTitle>
              <CardDescription>
                {percentage >= 75
                  ? "Excellent work! You're well prepared."
                  : percentage >= 50
                    ? "Good effort! Keep practicing."
                    : "Keep studying! You'll improve with practice."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-blue-600">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-lg">You scored {percentage}%</p>
              <div className="flex justify-center space-x-4">
                <Button className= "cursor-pointer" onClick={handleLoginRedirect}>Try Again</Button>
                <Button className= "cursor-pointer" onClick={handleLoginRedirect}>More Practice Tests</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="flex justify-center items-center gap-2 text-3xl md:text-4xl font-bold mb-4">Quick Practice Quiz <img src="/icons/quiz.gif" alt="phone" className="w-20 h-20 bg-transparent"/></h2>
          <p className="text-lg text-muted-foreground">Test your JEE & NEET preparation with these sample questions!</p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge variant={"outline"}>
                Question {currentQuestion + 1} of {quizQuestions.length}
              </Badge>
              <div className="flex items-center space-x-2">
                <Badge className="bg-blue-100 text-blue-800">{quizQuestions[currentQuestion].subject}</Badge>
                <div className="flex items-center space-x-2">
                  <HelpCircle className="h-4 w-4" />
                  <span className="text-sm">Score: {score}</span>
                </div>
              </div>
            </div>
            <Progress value={progress} className="mb-4" />
            <CardTitle className="text-xl">{quizQuestions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border transition-colors cursor-pointer ${
                    selectedAnswer === index
                      ? showResult
                        ? index === quizQuestions[currentQuestion].correct
                          ? "bg-green-100 border-green-500 text-green-800"
                          : "bg-red-100 border-red-500 text-red-800"
                        : "bg-blue-100 border-blue-500"
                      : showResult && index === quizQuestions[currentQuestion].correct
                        ? "bg-green-100 border-green-500 text-green-800"
                        : "bg-white border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showResult && (
                      <div>
                        {index === quizQuestions[currentQuestion].correct ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : selectedAnswer === index ? (
                          <XCircle className="h-5 w-5 text-red-600" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showResult && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Explanation:</strong> {quizQuestions[currentQuestion].explanation}
                </p>
              </div>
            )}

            <div className="flex justify-between pt-4 " >
              <Button
                variant={"outline"}
                onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0 || showResult}
                className= "cursor-pointer"
              >
                Previous
              </Button>
              <Button onClick={handleNextQuestion} disabled={selectedAnswer === null || showResult} className=" cursor-pointer">
                {currentQuestion === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
