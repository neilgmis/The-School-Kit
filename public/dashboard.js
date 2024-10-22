// Sample data for the charts
const behaviourData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  datasets: [{
      label: 'Behaviour Incidents',
      data: [5, 10, 7, 12],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
  }]
};

const attendanceData = {
  labels: ['Present', 'Absent'],
  datasets: [{
      label: 'Attendance',
      data: [75, 25],
      backgroundColor: ['#36A2EB', '#FF6384'],
      hoverBackgroundColor: ['#36A2EB', '#FF6384']
  }]
};

const assessmentData = {
  labels: ['Maths', 'English', 'Science'],
  datasets: [{
      label: 'Assessment Scores',
      data: [85, 78, 92],
      backgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384'],
      hoverBackgroundColor: ['#4BC0C0', '#FF9F40', '#FF6384']
  }]
};

// Create behaviour chart
const behaviourCtx = document.getElementById('behaviourChart').getContext('2d');
const behaviourChart = new Chart(behaviourCtx, {
  type: 'line',
  data: behaviourData,
  options: {
      responsive: true,
      maintainAspectRatio: false
  }
});

// Create attendance chart
const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
const attendanceChart = new Chart(attendanceCtx, {
  type: 'pie',
  data: attendanceData,
  options: {
      responsive: true,
      maintainAspectRatio: false
  }
});

// Create assessment chart
const assessmentCtx = document.getElementById('assessmentChart').getContext('2d');
const assessmentChart = new Chart(assessmentCtx, {
  type: 'bar',
  data: assessmentData,
  options: {
      responsive: true,
      maintainAspectRatio: false
  }
});
// Example of filtering logic for behaviour data
function filterBehaviourData() {
  const yearGroupFilter = document.getElementById('yearGroup').value;
  const formGroupFilter = document.getElementById('formGroup').value;

  // Make an API call to fetch filtered behaviour data from the server
  fetch(`/api/behaviour?yearGroup=${yearGroupFilter}&formGroup=${formGroupFilter}`)
    .then(response => response.json())
    .then(data => {
      // Clear the existing table data
      const tableBody = document.querySelector('.data-table tbody');
      tableBody.innerHTML = '';

      // Populate the table with the filtered data
      data.forEach(behaviour => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${behaviour.studentName}</td>
          <td>${behaviour.date}</td>
          <td>${behaviour.event}</td>
          <td>${behaviour.category}</td>
          <td>${behaviour.points}</td>
        `;
        tableBody.appendChild(row);
      });
    });
}

// Attach event listeners to the filter dropdowns
document.getElementById('yearGroup').addEventListener('change', filterBehaviourData);
document.getElementById('formGroup').addEventListener('change', filterBehaviourData);
