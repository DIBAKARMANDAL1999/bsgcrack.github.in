// certificate_generator.js
export function generateCertificate(name, examType, score) {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 400;
  
  ctx.fillStyle = "#fdf6e3";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "#000";
  ctx.font = "24px serif";
  ctx.fillText("Certificate of Achievement", 150, 80);
  
  ctx.font = "18px serif";
  ctx.fillText(`This certifies that`, 230, 130);
  ctx.fillText(name, 230, 170);
  ctx.fillText(`has passed the ${examType} with score ${score}`, 100, 210);
  
  ctx.font = "14px Arial";
  ctx.fillText("BSG Crack Team", 450, 350);
  
  const link = document.createElement("a");
  link.download = "bsg_certificate.png";
  link.href = canvas.toDataURL();
  link.click();
}