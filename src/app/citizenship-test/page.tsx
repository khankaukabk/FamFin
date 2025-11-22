
"use client";

import * as React from "react";
import Confetti from "react-confetti";
import { questions as allQuestions } from "@/lib/citizenship-questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, ChevronRight, RotateCw, Trophy, Timer } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Helper to shuffle an array
const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// Type for a single question with shuffled answers
type QuizQuestion = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

// Helper to format time
const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
};

export default function CitizenshipTestPage() {
  const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [windowSize, setWindowSize] = React.useState<{ width: number; height: number; }>({ width: 0, height: 0 });
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);

  const startNewGame = React.useCallback(() => {
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 20).map((q) => ({
      question: q.question,
      answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      correctAnswer: q.correct_answer,
    }));
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
    setStartTime(Date.now());
    setElapsedTime(0);
    setIsCorrect(null);
  }, []);

  // Get window size for confetti
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Start the game on initial render
  React.useEffect(() => {
    startNewGame();
  }, [startNewGame]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(null);
    } else {
      if (startTime) {
          setElapsedTime((Date.now() - startTime) / 1000);
      }
      setShowResults(true);
    }
  };

  if (questions.length === 0) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navigation title="U.S. Citizenship Test" />
            <main className="flex-1 flex items-center justify-center">
                <p>Loading questions...</p>
            </main>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isPassing = score / questions.length >= 0.9;

  if (showResults) {
    return (
      <div className="flex min-h-screen w-full flex-col">
        {isPassing && <Confetti width={windowSize.width} height={windowSize.height} />}
        <Navigation title="U.S. Citizenship Test" />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg text-center shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Test Complete!</CardTitle>
               {isPassing ? (
                <CardDescription className="text-lg text-green-600 font-semibold">Safura, you are marvellous!</CardDescription>
              ) : (
                <CardDescription className="text-lg text-yellow-600 font-semibold">Good effort! Better luck next time.</CardDescription>
              )}
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex flex-col items-center">
                    <Trophy className="w-16 h-16 text-yellow-500 mb-4" />
                    <p className="text-xl text-muted-foreground">You scored</p>
                    <p className="text-6xl font-bold text-primary">
                        {score} / {questions.length}
                    </p>
                </div>
                 <div className="flex justify-center items-center gap-2 text-muted-foreground">
                    <Timer className="w-5 h-5" />
                    <p className="text-lg">Time taken: <span className="font-semibold text-foreground">{formatTime(elapsedTime)}</span></p>
                </div>
                <Button onClick={startNewGame} size="lg">
                    <RotateCw className="mr-2 h-4 w-4" />
                    Take Another Test
                </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }
  

  return (
    <div className="flex min-h-screen w-full flex-col">
      {isCorrect === true && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} />}
      <Navigation title="U.S. Citizenship Test" />
      <main className="flex-1 p-4 sm:px-6 md:p-8 flex flex-col">
        <div className="w-full max-w-2xl mx-auto flex-grow flex flex-col justify-center">
          <Card className={cn("w-full", isCorrect === false && "animate-shake")}>
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="font-headline text-lg">Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
                <div className="text-sm font-semibold text-primary">Score: {score}</div>
              </div>
              <Progress value={progressPercentage} className="h-2" />
               <CardDescription className="pt-6 text-xl text-foreground text-center font-semibold">
                {currentQuestion.question}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentQuestion.answers.map((answer) => {
                const isCorrectAnswer = answer === currentQuestion.correctAnswer;
                const isSelected = selectedAnswer === answer;

                return (
                  <Button
                    key={answer}
                    onClick={() => handleAnswerSelect(answer)}
                    variant="outline"
                    className={cn(
                      "w-full h-auto min-h-[4rem] justify-start text-left p-4 text-base whitespace-normal",
                      isAnswered && isCorrectAnswer && "bg-green-500/15 border-green-500 text-foreground",
                      isAnswered && isSelected && !isCorrectAnswer && "bg-red-500/15 border-red-500 text-foreground",
                      !isAnswered && "hover:bg-accent/50"
                    )}
                    disabled={isAnswered}
                  >
                    {isAnswered && (isCorrectAnswer || isSelected) && (
                        isCorrectAnswer ? <CheckCircle className="mr-3 h-5 w-5 text-green-500 flex-shrink-0" /> : <XCircle className="mr-3 h-5 w-5 text-red-500 flex-shrink-0" />
                    )}
                    {answer}
                  </Button>
                );
              })}
            </CardContent>
          </Card>

          {isAnswered && (
             <div className="mt-6 text-center">
              <Button onClick={handleNextQuestion} size="lg">
                {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Test'}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Good luck on your exam!
      </footer>
    </div>
  );
}

    