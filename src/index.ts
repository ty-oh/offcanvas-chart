const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (ctx) {
  ctx.fillStyle = "steelblue";
  ctx.fillRect(100, 100, 200, 100);
}
