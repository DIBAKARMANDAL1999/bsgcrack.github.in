// activity_tracker.js

export function getStudentActivity(studentName) {
  if (!studentName) return "Please enter a name.";
  
  // Placeholder logic (simulate database)
  const mockDatabase = {
    "Anik Roy": { exams: 3, score: 82, wallet: 15 },
    "Dibakar Mandal": { exams: 5, score: 92, wallet: 50 }
  };
  
  const data = mockDatabase[studentName];
  
  if (!data) {
    return `<p>No data found for <strong>${studentName}</strong>.</p>`;
  }
  
  return `
    <h3>Activity for ${studentName}</h3>
    <ul>
      <li>Total Exams: ${data.exams}</li>
      <li>Average Score: ${data.score}%</li>
      <li>Wallet Balance: ₹${data.wallet}</li>
    </ul>
  `;
}