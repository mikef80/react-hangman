export const HelperGrid = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cell = 20,
) => {
  ctx.save();

  ctx.strokeStyle = "rgba(0,0,0,0.15)";
  ctx.lineWidth = 1;
  ctx.font = "10px monospace";
  ctx.fillStyle = "rgba(0,0,0,0.45)";

  // vertical lines
  for (let x = 0; x <= width; x += cell) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();

    // label
    ctx.fillText(String(x), x + 2, 10);
  }

  // horizontal lines
  for (let y = 0; y <= height; y += cell) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();

    // label
    ctx.fillText(String(y), 2, y - 2);
  }

  ctx.restore();
};
