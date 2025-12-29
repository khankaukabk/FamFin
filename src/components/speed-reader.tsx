
"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Play, Pause, Rewind } from "lucide-react";

interface SpeedReaderProps {
  text: string;
}

const SpeedReader = ({ text }: SpeedReaderProps) => {
  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wpm, setWpm] = useState(300);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentWord = words[currentWordIndex] || "";
  const pivotIndex = useMemo(() => {
    const len = currentWord.length;
    if (len <= 1) return 0;
    if (len <= 5) return 1;
    if (len <= 9) return 2;
    if (len <= 13) return 3;
    return 4;
  }, [currentWord]);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentWordIndex((prevIndex) => {
          if (prevIndex < words.length - 1) {
            return prevIndex + 1;
          }
          setIsPlaying(false);
          return prevIndex;
        });
      }, 60000 / wpm);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, wpm, words.length]);

  const togglePlayPause = () => {
    if (currentWordIndex >= words.length - 1) {
      setCurrentWordIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleWpmChange = (value: number[]) => {
    setWpm(value[0]);
  };
  
  const handleRestart = () => {
    setCurrentWordIndex(0);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  }

  const beforePivot = currentWord.slice(0, pivotIndex);
  const pivotChar = currentWord[pivotIndex];
  const afterPivot = currentWord.slice(pivotIndex + 1);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <div className="w-full h-32 bg-neutral-800 rounded-lg flex items-center justify-center text-4xl font-mono relative border border-neutral-700">
        <p>
          <span className="text-neutral-500">{beforePivot}</span>
          <span className="text-teal-400">{pivotChar}</span>
          <span className="text-neutral-500">{afterPivot}</span>
        </p>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+28px)] h-12 w-[1px] bg-teal-400/50"></div>
      </div>

      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-400">
                Speed: <span className="font-bold text-white">{wpm} WPM</span>
            </span>
             <span className="text-sm text-neutral-400">
                {currentWordIndex + 1} / {words.length}
            </span>
        </div>
        <Slider
          min={50}
          max={1200}
          step={10}
          value={[wpm]}
          onValueChange={handleWpmChange}
        />
      </div>

      <div className="flex items-center gap-4">
         <Button variant="outline" size="icon" onClick={handleRestart} className="h-14 w-14 rounded-full bg-neutral-800 border-neutral-700 hover:bg-neutral-700">
            <Rewind className="h-6 w-6"/>
        </Button>
        <Button onClick={togglePlayPause} size="lg" className="h-20 w-20 rounded-full bg-teal-500 hover:bg-teal-600 text-black">
          {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
        </Button>
         <div className="h-14 w-14"></div>
      </div>
    </div>
  );
};

export default SpeedReader;
