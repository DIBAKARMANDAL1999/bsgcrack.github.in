// milestone_exam.js
export function loadMilestoneExam(level) {
  switch (level) {
    case 'pravesh':
      return ["What is the Scout Promise?", "What are 3 duties?"];
    case 'dwitiya':
      return ["Explain First Aid", "What is a Lash?"];
    case 'tritiya':
      return ["Explain Campcraft", "Explain Disaster Management"];
    default:
      return ["Invalid level"];
  }
}