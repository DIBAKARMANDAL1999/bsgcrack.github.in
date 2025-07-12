// mcq_auto_gen.js
export function generateMCQFromText(text) {
  // Very simple keyword-based placeholder logic
  const lower = text.toLowerCase();
  if (lower.includes("scout law")) {
    return {
      question: "How many points are in Scout Law?",
      options: ["10", "12", "5", "8"],
      answer: "10"
    };
  }
  
  return {
    question: "Who is the founder of Scouting?",
    options: ["Baden-Powell", "Olave Powell", "Lord Robert", "Robert Frost"],
    answer: "Baden-Powell"
  };
}