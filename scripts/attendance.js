document.addEventListener("DOMContentLoaded", function() {
  function renderAttendance() {
    const container = document.getElementById("main-div");
    let html = `
      <div class="attendance-wrapper">
        <h2>Attendance Details</h2>
        <table class="attendance-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Subject Type</th>
              <th>Total Classes</th>
              <th>Total Present</th>
              <th>Total Absent</th>
              <th>Total Attendance (%)</th>
            </tr>
          </thead>
          <tbody>
    `;
    attendanceRecords.forEach(record => {
      const absent = record.total - record.present;
      const percent = ((record.present / record.total) * 100).toFixed(2);
      html += `
        <tr>
          <td>${record.code}</td>
          <td>${record.name}</td>
          <td>${record.type}</td>
          <td>${record.total}</td>
          <td>${record.present}</td>
          <td>${absent}</td>
          <td style="color:${percent >= 75 ? 'green':'red'}">${percent}</td>
        </tr>
      `;
    });
    html += `
          </tbody>
        </table>
      </div>`;
    container.innerHTML = html;
    container.style.display = "block";
  }

  document.getElementById('sidebar-attendance').addEventListener('click', renderAttendance);
});
