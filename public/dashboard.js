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
