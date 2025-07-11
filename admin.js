// Dummy stats (simulate fetched data)
document.getElementById('totalUsers').textContent = 5123;
document.getElementById('activeSubs').textContent = 3871;
document.getElementById('pendingCerts').textContent = 62;

// Load earnings report JSON
fetch('earnings_report.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('earningsData').textContent = JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById('earningsData').textContent = "Error loading earnings report.";
    console.error(err);
  });