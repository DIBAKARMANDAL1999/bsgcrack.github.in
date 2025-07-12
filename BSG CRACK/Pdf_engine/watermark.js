// watermark.js
export function applyWatermark(ctx, width, height, text = "BSG Crack") {
  ctx.save();
  ctx.font = "20px sans-serif";
  ctx.globalAlpha = 0.1;
  ctx.translate(width / 2, height / 2);
  ctx.rotate(-0.4);
  ctx.fillStyle = "#555";
  ctx.textAlign = "center";
  ctx.fillText(text, 0, 0);
  ctx.restore();
}