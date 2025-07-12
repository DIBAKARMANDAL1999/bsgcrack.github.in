// results_exporter.js
export function exportResults(resultsArray) {
  // Format: [{name, score, examType, date}]
  return resultsArray.map(res => {
    return `${res.name}, ${res.examType}, Score: ${res.score}, Date: ${res.date}`;
  }).join("\n");
}