import { useEffect, useRef } from "react";
import { line, circle } from "./draw";

const steps = [
  (ctx: CanvasRenderingContext2D) => line(ctx, 20, 280, 180, 280), // base
  (ctx: CanvasRenderingContext2D) => line(ctx, 60, 280, 60, 40), // pole
  (ctx: CanvasRenderingContext2D) => line(ctx, 60, 40, 160, 40), // beam
  (ctx: CanvasRenderingContext2D) => line(ctx, 160, 40, 160, 80), // rope
  (ctx: CanvasRenderingContext2D) => circle(ctx, 160, 100, 20), // head
  (ctx: CanvasRenderingContext2D) => line(ctx, 160, 120, 160, 200), // body
  (ctx: CanvasRenderingContext2D) => line(ctx, 160, 140, 120, 170), // left arm
  (ctx: CanvasRenderingContext2D) => line(ctx, 160, 140, 200, 170), // right arm
  (ctx: CanvasRenderingContext2D) => line(ctx, 160, 200, 130, 240), // left leg
  (ctx: CanvasRenderingContext2D) => line(ctx, 160, 200, 190, 240), // right leg
];

const drawHangman = (ctx: CanvasRenderingContext2D, wrongGuesses: number) => {
  ctx.clearRect(0, 0, 300, 300);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  for (let i = 0; i < wrongGuesses; i++) {
    steps[i]?.(ctx);
  }
};

const Canvas = ({ wrongGuesses }: { wrongGuesses: number }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawHangman(ctx, wrongGuesses);
  }, [wrongGuesses]);

  return <canvas ref={canvasRef} width={300} height={300} />;
};

export default Canvas;
