import { useEffect, useRef } from "react";
import { line, circle, rect, ellipseArc, cloud } from "./draw";
import { HelperGrid } from "../HelperGrid/HelperGrid";

const steps = [
  (ctx: CanvasRenderingContext2D) => line(ctx, 40, 380, 260, 380, "white"), // 1 — Track
  (ctx: CanvasRenderingContext2D) => rect(ctx, 60, 378.5, 20, -40, "lightgrey"), // 2 — Left wheel
  (ctx: CanvasRenderingContext2D) => rect(ctx, 220, 378.5, 20, -40, "lightgrey"), // 3 — Right wheel
  (ctx: CanvasRenderingContext2D) => rect(ctx, 40, 338.5, 220, -30, "black"), // 4 — Buffer beam (front plate)
  (ctx: CanvasRenderingContext2D) => circle(ctx, 60, 323.5, 10, "grey"), // 5 — Left buffer
  (ctx: CanvasRenderingContext2D) => circle(ctx, 240, 323.5, 10, "grey"), // 6 — Right buffer
  (ctx: CanvasRenderingContext2D) => rect(ctx, 50, 305, 200, -200, "red"), // 7 — Cab
  (ctx: CanvasRenderingContext2D) => ellipseArc(ctx, 150, 307, 80, 120, 180, 0), // 8 — Boiler Frame
  (ctx: CanvasRenderingContext2D) => circle(ctx, 150, 250, 50, "black"), // 9 — Boiler front (big circle face)
  (ctx: CanvasRenderingContext2D) => rect(ctx, 135, 150, 30, 40, "black"), // 10 — Chimney
  (ctx: CanvasRenderingContext2D) => rect(ctx, 40, 91.5, 220, 10, "black"), // 11 — Cab roof
  (ctx: CanvasRenderingContext2D) => circle(ctx, 90, 150, 25, "black"), // 12 — Left Window
  (ctx: CanvasRenderingContext2D) => circle(ctx, 210, 150, 25, "black"), // 13 — Right Window
  (ctx: CanvasRenderingContext2D) => cloud(ctx, -40, 140, 1.1, 0.5, 30,'white'), // 14 - Cloud 1
  (ctx: CanvasRenderingContext2D) => cloud(ctx, -10, 100, 1.1, 0.5, 30,'white'), // 15 - Cloud 1
];

const drawHangman = (ctx: CanvasRenderingContext2D, remainingGuesses: number) => {
  const canvas = document.getElementById("myCanvas");

  if (!canvas) return;

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;

  for (let i = 0; i < remainingGuesses; i++) {
    steps[i]?.(ctx);
  }

  // HelperGrid(ctx, canvas.clientWidth, canvas.clientHeight, 20);
};

const Canvas = ({ remainingGuesses }: { remainingGuesses: number }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    drawHangman(ctx, remainingGuesses);
  }, [remainingGuesses]);

  return <canvas id='myCanvas' ref={canvasRef} width={300} height={400} />;
};

export default Canvas;
