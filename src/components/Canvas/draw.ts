export function line(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  colour: string = "",
) {
  ctx.save();
  if (colour) ctx.strokeStyle = colour;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

export function circle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  colour: string = "",
) {
  ctx.save();
  if (colour) ctx.fillStyle = colour;

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
  ctx.restore();
}

export function rect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  colour: string = "",
) {
  ctx.save();
  if (colour) ctx.fillStyle = colour;
  if (colour) ctx.strokeStyle = colour;

  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
}

/* export function arc(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  start: number,
  end: number,
  anticlockwise = false,
) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, start, end, anticlockwise);
  ctx.stroke();
  ctx.restore();
}

export function arcDeg(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  startDeg: number,
  endDeg: number,
  anticlockwise = false,
) {
  const deg = (d: number) => (d * Math.PI) / 180;
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, r, deg(startDeg), deg(endDeg), anticlockwise);
  ctx.stroke();
  ctx.restore();
} */

export function ellipseArc(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radiusX: number,
  radiusY: number,
  startDeg: number,
  endDeg: number,
  rotationDeg = 0,
  anticlockwise = false,
) {
  const deg = (d: number) => (d * Math.PI) / 180;
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(
    x,
    y,
    radiusX,
    radiusY,
    deg(rotationDeg),
    deg(startDeg),
    deg(endDeg),
    anticlockwise,
  );
  ctx.stroke();
  ctx.restore();
}

export function cloud(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  scaleX: number = 1,
  scaleY: number = 1,
  rotate: number = 1,
  colour: string = "white",
) {
  if (colour) ctx.strokeStyle = colour;
  if (colour) ctx.fillStyle = colour;

  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scaleX, scaleY);
  ctx.rotate(rotate);

  // Set stroke style for cloud outline
  ctx.strokeStyle = "white";
  ctx.lineWidth = 15;

  circle(ctx, 85, 160, 5);
  circle(ctx, 100, 160, 5);
  circle(ctx, 115, 160, 5);
  circle(ctx, 85, 170, 5);
  circle(ctx, 100, 170, 5);
  circle(ctx, 115, 170, 5);
  circle(ctx, 75, 165, 5);
  circle(ctx, 125, 165, 5);

  ctx.restore();
}
