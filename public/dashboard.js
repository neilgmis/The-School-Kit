// Initialize charts on page load
window.onload = function() {
  initBehaviourChart();
  initAttendanceChart();
  initAssessmentChart();
  initAttitudeChart();
  initPointsChart();
  populateSafeguardingLogs();
};

// Function to initialize Behaviour Chart
function initBehaviourChart() {
  const ctx = document.getElementById('behaviourChart').getContext('2d');
  const behaviourChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Behaviour Incidents',
        data: [5, 7, 6, 10],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Function to initialize Attendance Chart
function initAttendanceChart() {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  const attendanceChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Present', 'Absent'],
      datasets: [{
        data: [80, 20],
        backgroundColor: ['#1271b6', '#ff6384']
      }]
    }
  });
}

// Function to initialize Assessment Chart
function initAssessmentChart() {
  const ctx = document.getElementById('assessmentChart').getContext('2d');
  const assessmentChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Maths', 'English', 'Science'],
      datasets: [{
        label: 'Assessment Scores',
        data: [85, 75, 90],
        backgroundColor: ['#1271b6', '#ff6384', '#36a2eb']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Function to initialize Attitude Chart
function initAttitudeChart() {
  const ctx = document.getElementById('attitudeChart').getContext('2d');
  const attitudeChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Attitude Scores',
        data: [15, 12, 17, 14],
        backgroundColor: 'rgba(18, 113, 182, 0.5)',
        borderColor: 'rgba(18, 113, 182, 1)',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// Function to initialize Points Chart
function initPointsChart() {
  const ctx = document.getElementById('pointsChart').getContext('2d');
  const pointsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Student 1', 'Student 2', 'Student 3', 'Student 4'],
      datasets: [{
        label: 'Points',
        data: [50, 40, 30, 20],
        backgroundColor: ['#1271b6', '#f56991', '#ffc107', '#28a745'],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

// Sample safeguarding logs (this will be replaced with dynamic data)
const safeguardingLogs = [
  { name: 'John Doe', category: 'Concern', actioned: false },
  { name: 'Jane Smith', category: 'Bullying', actioned: true },
  { name: 'Sam White', category: 'Child Protection', actioned: false },
];

// Function to populate the safeguarding logs
function populateSafeguardingLogs() {
  const logsContainer = document.getElementById('safeguardingLogs');
  logsContainer.innerHTML = '';  // Clear the list first

  safeguardingLogs.forEach(log => {
      const listItem = document.createElement('li');
      listItem.textContent = `${log.name} - ${log.category}`;
      if (!log.actioned) {
          const flag = document.createElement('span');
          flag.className = 'red-flag';
          flag.textContent = '⚑';
          listItem.appendChild(flag);
      }
      logsContainer.appendChild(listItem);
  });
}

// Function to toggle the safeguarding logs
function toggleSafeguardingLogs() {
  const logsContainer = document.getElementById('safeguardingLogs');
  logsContainer.classList.toggle('hidden');
}
