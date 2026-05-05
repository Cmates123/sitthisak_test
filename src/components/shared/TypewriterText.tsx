'use client';
import { useEffect, useState } from 'react';

interface Props {
  text: string;
  speed?: number;
  pauseAfterType?: number;
  startDelay?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 55,
  pauseAfterType = 1800,
  startDelay = 600,
  className,
}: Props) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [pausing, setPausing] = useState(false);

  // initial delay
  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let t: ReturnType<typeof setTimeout>;

    if (!pausing && index < text.length) {
      // typing
      t = setTimeout(() => setIndex((i) => i + 1), speed);
    } else if (!pausing && index === text.length) {
      // done typing → pause then reset to 0 instantly
      t = setTimeout(() => {
        setPausing(true);
        setTimeout(() => {
          setIndex(0);
          setPausing(false);
        }, pauseAfterType);
      }, 0);
    }

    return () => clearTimeout(t);
  }, [started, index, pausing, text.length, speed, pauseAfterType]);

  const done = index === text.length && !pausing;

  return (
    <span className={className}>
      {text.slice(0, index)}
      <span
        className="inline-block w-px bg-current ml-0.5 align-middle"
        style={{
          height: '1em',
          animation: done ? 'cursor-blink 1s step-end infinite' : 'none',
          opacity: started ? 1 : 0,
        }}
      />
    </span>
  );
}
