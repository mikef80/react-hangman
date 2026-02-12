export function line(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

export function circle(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  colour: string = "",
) {
  ctx.fillStyle = colour;

  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
}

export function rect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  colour: string = "",
) {
  ctx.fillStyle = colour;

  ctx.beginPath();
  ctx.fillRect(x, y, w, h);
  ctx.stroke();
}

export function arc(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  start: number,
  end: number,
  anticlockwise = false,
) {
  ctx.beginPath();
  ctx.arc(x, y, r, start, end, anticlockwise);
  ctx.stroke();
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
  ctx.beginPath();
  ctx.arc(x, y, r, deg(startDeg), deg(endDeg), anticlockwise);
  ctx.stroke();
}

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
  ctx.fillStyle = colour;

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
