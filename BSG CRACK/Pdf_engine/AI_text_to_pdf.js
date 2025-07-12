// AI_text_to_pdf.js
export function generatePDFfromText(text, filename = "output.pdf") {
  const doc = new jsPDF();
  const lines = doc.splitTextToSize(text, 180);
  doc.text(lines, 15, 20);
  doc.save(filename);
}