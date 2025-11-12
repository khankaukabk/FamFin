
"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { Trophy, Users, Server, Gamepad2 } from "lucide-react";

const WINNING_SCORE = 11;

export default function TableTennisPage() {
  const [player1Score, setPlayer1Score] = React.useState(0);
  const [player2Score, setPlayer2Score] = React.useState(0);
  const [winner, setWinner] = React.useState<number | null>(null);

  const totalPoints = player1Score + player2Score;
  const isDeuce = player1Score >= WINNING_SCORE - 1 && player2Score >= WINNING_SCORE - 1;
  const server = isDeuce 
    ? (totalPoints % 2 === 0 ? 1 : 2)
    : (Math.floor(totalPoints / 2) % 2 === 0 ? 1 : 2);

  React.useEffect(() => {
    if (player1Score >= WINNING_SCORE && player1Score >= player2Score + 2) {
      setWinner(1);
    } else if (player2Score >= WINNING_SCORE && player2Score >= player1Score + 2) {
      setWinner(2);
    } else {
      setWinner(null);
    }
  }, [player1Score, player2Score]);

  const handleIncrement = (player: number) => {
    if (winner) return;
    if (player === 1) {
      setPlayer1Score((s) => s + 1);
    } else {
      setPlayer2Score((s) => s + 1);
    }
  };

  const handleReset = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setWinner(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation title="Table Tennis" />
      <main className="flex-1 p-4 sm:px-6 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mx-auto">
          {winner && (
            <Card className="mb-8 bg-primary text-primary-foreground border-yellow-400 shadow-2xl">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <Trophy className="w-12 h-12 text-yellow-400 mb-4" />
                <p className="text-2xl font-bold font-headline">
                  Player {winner} Wins!
                </p>
                <Button onClick={handleReset} variant="secondary" className="mt-4">
                  Play Again
                </Button>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <PlayerCard
              playerNumber={1}
              score={player1Score}
              onIncrement={() => handleIncrement(1)}
              isServing={server === 1 && !winner}
              isWinner={winner === 1}
            />
            <PlayerCard
              playerNumber={2}
              score={player2Score}
              onIncrement={() => handleIncrement(2)}
              isServing={server === 2 && !winner}
              isWinner={winner === 2}
            />
          </div>

           {!winner && (
            <div className="mt-8 text-center">
              <Button onClick={handleReset} variant="outline" size="lg">
                Reset Game
              </Button>
            </div>
           )}
        </div>
      </main>
    </div>
  );
}

interface PlayerCardProps {
  playerNumber: number;
  score: number;
  onIncrement: () => void;
  isServing: boolean;
  isWinner: boolean;
}

function PlayerCard({ playerNumber, score, onIncrement, isServing, isWinner }: PlayerCardProps) {
  return (
    <Card className={`transition-all duration-300 ${isWinner ? 'border-primary shadow-2xl' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-headline">Player {playerNumber}</CardTitle>
        {isServing && (
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
                <Server className="h-5 w-5" />
                <span>Serving</span>
            </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-6">
        <p className="text-8xl font-bold text-foreground">{score}</p>
        <Button onClick={onIncrement} size="lg" className="w-full py-6 text-lg">
          Add Point
        </Button>
      </CardContent>
    </Card>
  );
}

