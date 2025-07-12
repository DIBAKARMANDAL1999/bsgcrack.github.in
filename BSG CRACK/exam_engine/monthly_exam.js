// monthly_exam.js
export function getMonthlyExam() {
  const date = new Date();
  return {
    month: date.toLocaleString('default', { month: 'long' }),
    questions: [
      { question: "Who wrote 'Scouting for Boys'?", options: ["Rover BP", "BP", "Olave", "None"], answer: "BP" },
      { question: "First Scout Camp held at?", options: ["Gilwell", "London", "Brownsea Island", "Hyde Park"], answer: "Brownsea Island" }
    ]
  };
}