// idcard_generator.js
export function generateIDCard(name, email) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 400;
  canvas.height = 250;
  
  ctx.fillStyle = "#004d99";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "#fff";
  ctx.font = "20px Arial";
  ctx.fillText("BSG CRACK ID CARD", 90, 40);
  
  ctx.font = "16px Arial";
  ctx.fillText("Name: " + name, 50, 100);
  ctx.fillText("Email: " + email, 50, 140);
  
  const link = document.createElement("a");
  link.download = "bsg_idcard.png";
  link.href = canvas.toDataURL();
  link.click();
}