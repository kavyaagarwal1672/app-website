// Attach event listeners to sidebar buttons (using correct IDs)
document.getElementById('sidebar-home').addEventListener('click', showHome);
document.getElementById('sidebar-attendance').addEventListener('click', showAttendance);
document.getElementById('sidebar-lectures').addEventListener('click', showLectures);

// Show timetable by default on page load
window.addEventListener('DOMContentLoaded', showHome);

function showHome() {
    document.getElementById('main-content').innerHTML = generateTimetableHTML();
}

function showAttendance() {
    document.getElementById('main-content').innerHTML = generateAttendanceHTML();
}

function showLectures() {
    document.getElementById('main-content').innerHTML = generateLecturesHTML();
}

// Temporary stub functions to be replaced with real content generation
function generateAttendanceHTML() {
  return '<h2>Attendance Page</h2>';
}

function generateLecturesHTML() {
  return '<h2>Lectures Page</h2>';
}

document.getElementById('sidebar-image').addEventListener('click', function() {
  // Redirect to recognition.html
  window.location.href = "recognition.html";
});
