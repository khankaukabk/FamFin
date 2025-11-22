
"use client";

import * as React from "react";
import Confetti from "react-confetti";
import { questions as allQuestions } from "@/lib/citizenship-questions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { cn } from "@/lib/utils";
import { CheckCircle, XCircle, ChevronRight, RotateCw, Trophy, Timer, PlayCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

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

const encouragingMessages = [
  "You can do it, Safura!",
  "Guess it right, Safura!",
  "You've got this, Safura!",
  "Stay focused, Safura!",
  "Believe in yourself!",
  "Keep up the great work, Safura!",
  "One question at a time!",
  "Show what you know, Safura!",
  "Impressive knowledge!",
  "You're on a roll, Safura!",
  "That's the spirit, Safura!",
  "Keep pushing forward!",
  "You're a star, Safura!",
  "Excellent effort!",
  "Trust your instincts, Safura!",
  "You are brilliant!",
  "Go, Safura, go!",
  "You're making great progress!",
  "Another one down!",
  "Think hard, you know this!",
  "Amazing work, Safura!",
  "You're a history whiz!",
  "Keep that momentum going!",
  "You are acing this test!",
  "Fantastic, Safura!",
  "Smart thinking!",
  "You're doing wonderfully!",
  "Don't give up, Safura!",
  "One step closer to success!",
  "You're a champion, Safura!",
  "Focus and triumph!",
  "You're on fire today!",
  "That's the way to do it!",
  "Incredible, Safura!",
  "Keep your eyes on the prize!",
  "You are unstoppable!",
  "You're a true scholar!",
  "History is your playground!",
  "Civics has nothing on you!",
  "You're a powerhouse, Safura!",
  "Outstanding performance!",
  "Way to go, Safura!",
  "You're getting better and better!",
  "Future citizen right here!",
  "That's a fantastic answer!",
  "You're shining bright, Safura!",
  "Keep believing in yourself!",
  "You are so close!",
  "Every correct answer is a victory!",
  "You're a role model, Safura!",
  "Keep up the amazing effort!",
  "This is your moment!",
  "You've studied hard for this!",
  "Let's see that brainpower!",
  "You are so smart, Safura!",
  "Nothing can stop you!",
  "You are destined for greatness!",
  "Keep that positive attitude!",
  "You're a knowledge powerhouse!",
  "That's another point for Safura!",
  "You are a winner!",
  "Keep that streak alive!",
  "You are a master of this!",
  "Superb job, Safura!",
  "You're an inspiration!",
  "The finish line is in sight!",
  "You are doing beautifully!",
  "Just a few more to go!",
  "You're a force to be reckoned with!",
  "Keep learning, keep growing!",
  "You are making history!",
  "What a great job, Safura!",
  "You are a true patriot!",
  "This is your time to shine!",
  "You are doing an awesome job!",
  "You have a great memory!",
  "Keep up the high score!",
  "You are doing better than you think!",
  "Every question is a new opportunity!",
  "You've got the heart of a citizen!",
  "Success is just around the corner!",
  "You're a true American in the making!",
  "Your dedication is paying off!",
  "You are a testament to hard work!",
  "Let's get this done, Safura!",
  "You have what it takes!",
  "Keep your head held high!",
  "You're proving how smart you are!",
  "You're in the zone!",
  "That's the right way to think!",
  "You're a problem solver!",
  "You are a quick learner!",
  "This is easy for you, Safura!",
  "You're making it look easy!",
  "Keep up the fantastic work!",
  "You're on the path to success!",
  "You're a natural at this!",
  "You're a future leader!",
  "Keep your confidence high!",
  "You are a true scholar, Safura!",
  "You're a credit to your family!",
  "You're making everyone proud!",
  "You are doing a phenomenal job!",
  "You are on the right track!",
  "You are a star student!",
  "This test is no match for you!",
  "You're a beacon of knowledge!",
  "Keep your focus sharp!",
  "You are a true intellectual!",
  "You're a master of American history!",
  "You're a civics superstar!",
  "You are a government guru!",
  "You are a legal eagle!",
  "You are a geography genius!",
  "You are a symbol of success!",
  "You are a holiday hero!",
  "You're a true American hero!",
  "You are a future voter!",
  "You are a responsible citizen!",
  "You're a democratic dynamo!",
  "You're a constitutional champ!",
  "You're an amendment authority!",
  "You're a Bill of Rights boss!",
  "You're a congressional connoisseur!",
  "You're a presidential pro!",
  "You're a judicial genius!",
  "You're a federalism fanatic!",
  "You're a state power specialist!",
  "You're a political party pro!",
  "You're a voting rights virtuoso!",
  "You're a citizen's duty champion!",
  "You're a rights and responsibilities expert!",
  "You're a pledge of allegiance pro!",
  "You're a naturalization oath navigator!",
  "You're an age to vote authority!",
  "You're a democracy defender!",
  "You're a tax time titan!",
  "You're a selective service savant!",
  "You're a colonial history captain!",
  "You're a pre-European America expert!",
  "You're a slavery history specialist!",
  "You're a colonist-British conflict commander!",
  "You're a Declaration of Independence diva!",
  "You're a Constitutional Convention captain!",
  "You're a Federalist Papers fanatic!",
  "You're a Ben Franklin friend!",
  "You're a George Washington whiz!",
  "You're a first president pro!",
  "You're a Louisiana Purchase legend!",
  "You're an 1800s war wizard!",
  "You're a Civil War commander!",
  "You're an Abraham Lincoln legend!",
  "You're an Emancipation Proclamation pro!",
  "You're a Susan B. Anthony advocate!",
  "You're a 1900s war wizard!",
  "You're a Woodrow Wilson whiz!",
  "You're a Franklin Roosevelt friend!",
  "You're a World War II wizard!",
  "You're an Eisenhower expert!",
  "You're a Cold War commander!",
  "You're a civil rights champion!",
  "You're a Martin Luther King, Jr. master!",
  "You're a September 11th historian!",
  "You're an American Indian tribe tracker!",
  "You're a longest rivers rider!",
  "You're a West Coast waves whiz!",
  "You're an East Coast waves expert!",
  "You're a U.S. territory traveler!",
  "You're a Canada border boss!",
  "You're a Mexico border master!",
  "You're a U.S. capital captain!",
  "You're a Statue of Liberty lover!",
  "You're a flag stripes specialist!",
  "You're a flag stars savant!",
  "You're a national anthem authority!",
  "You're an Independence Day expert!",
  "You're a national holidays hero!",
  "Safura, you are a legend!",
  "Keep shining, Safura!",
  "Top of the class, Safura!",
  "Simply the best, Safura!",
  "You're a true American dream!",
  "Safura for President!",
  "Your hard work is inspiring!",
  "Keep that amazing brain working!",
  "So proud of you, Safura!",
  "You make it look so easy!",
  "Another correct answer for Safura!",
  "Pure genius at work!",
  "Unbelievable, Safura!",
  "You're a walking encyclopedia!",
  "The questions fear you, Safura!"
];

const getRandomMessage = () => encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];

type GameState = "welcome" | "playing" | "results";

export default function CitizenshipTestPage() {
  const [questions, setQuestions] = React.useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState<string | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [incorrectCount, setIncorrectCount] = React.useState(0);
  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const [windowSize, setWindowSize] = React.useState<{ width: number; height: number; }>({ width: 0, height: 0 });
  const [isCorrect, setIsCorrect] = React.useState<boolean | null>(null);
  const [encouragingMessage, setEncouragingMessage] = React.useState("");
  const [gameState, setGameState] = React.useState<GameState>("welcome");

  const startNewGame = React.useCallback(() => {
    const shuffledQuestions = shuffleArray(allQuestions).slice(0, 100).map((q) => ({
      question: q.question,
      answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      correctAnswer: q.correct_answer,
    }));
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIncorrectCount(0);
    setStartTime(Date.now());
    setElapsedTime(0);
    setIsCorrect(null);
    setEncouragingMessage(getRandomMessage());
    setGameState("playing");
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
  
  // Live timer effect
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (gameState === 'playing' && startTime) {
      interval = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, startTime]);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      setIsCorrect(true);
    } else {
      setIncorrectCount((prev) => prev + 1);
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setIsCorrect(null);
      setEncouragingMessage(getRandomMessage());
    } else {
      setGameState("results");
    }
  };
  
  const handleRestart = () => {
      setGameState("welcome");
  };

  if (gameState === "welcome") {
    return (
      <div className="flex min-h-screen w-full flex-col">
        <Navigation title="U.S. Citizenship Test" />
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg text-center shadow-2xl animate-in fade-in-50 zoom-in-95">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Ready to Practice?</CardTitle>
              <CardDescription className="text-lg text-muted-foreground pt-4">
                Safura, your hard work has led you to this moment. Believe in yourself and show what you know. You're ready for this!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button onClick={startNewGame} size="lg" className="mt-4">
                <PlayCircle className="mr-2 h-5 w-5" />
                Begin Test
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  if (gameState === "results") {
    const correctAnswers = score;
    const incorrectAnswers = questions.length - score;
    const isPassing = score / questions.length >= 0.9;

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
                <div className="space-y-3 text-left w-full max-w-sm mx-auto">
                    <div className="flex justify-between items-center text-lg">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><CheckCircle className="text-green-500"/> Correct Answers:</p>
                        <p className="font-bold text-green-600">{correctAnswers}</p>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center text-lg">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><XCircle className="text-red-500"/> Incorrect Answers:</p>
                        <p className="font-bold text-red-500">{incorrectAnswers}</p>
                    </div>
                    <Separator />
                     <div className="flex justify-between items-center text-lg pt-2">
                        <p className="font-medium text-muted-foreground flex items-center gap-2"><Timer /> Time Taken:</p>
                        <p className="font-semibold text-foreground">{formatTime(elapsedTime)}</p>
                    </div>
                </div>
                <Button onClick={startNewGame} size="lg" className="mt-4">
                    <RotateCw className="mr-2 h-4 w-4" />
                    Take Another Test
                </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }
  
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
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      {isCorrect === true && <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} />}
      <Navigation title="U.S. Citizenship Test" showRestartButton={true} onRestart={handleRestart} timer={formatTime(elapsedTime)} />
      <main className="flex-1 p-4 sm:px-6 md:p-8 flex flex-col">
        <div className="w-full max-w-2xl mx-auto flex-grow flex flex-col justify-center">
          <Card className={cn("w-full", isCorrect === false && "animate-shake")}>
            <CardHeader>
              <div className="flex justify-between items-center mb-2 text-sm font-semibold">
                <CardTitle className="font-headline text-lg">Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
                <div className="flex items-center gap-4">
                  <div className="text-green-600 flex items-center gap-1"><CheckCircle className="h-4 w-4" /> Correct: {score}</div>
                  <div className="text-red-500 flex items-center gap-1"><XCircle className="h-4 w-4" /> Incorrect: {incorrectCount}</div>
                </div>
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
          
          <div className="mt-4 text-center">
            {!isAnswered && (
                <p className="text-primary font-semibold text-lg animate-pulse">
                {encouragingMessage}
                </p>
            )}
            {isAnswered && (
                <Button onClick={handleNextQuestion} size="lg">
                    {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Test'}
                    <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
            )}
          </div>
        </div>
      </main>
       <footer className="text-center p-4 text-muted-foreground text-xs">
        Good luck on your exam!
      </footer>
    </div>
  );
}

    