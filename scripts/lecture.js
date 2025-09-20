document.addEventListener("DOMContentLoaded", function() {
  // Function to render lectures
  function renderLectures() {
    const container = document.getElementById("main-div");
    let html = '';
    lectures.forEach(lecture => {
      html += `
      <div class="video-div">
        <div><img src="${lecture.thumb}" class="thumbnail"></div>
        <div class="content-div">
          <div>
            <img src="${lecture.channel}" class="channel-photo">
          </div>
          <div>
            <p class="video-title">${lecture.title}</p>
          </div>
        </div>
      </div>
      `;
    });
    container.innerHTML = html;
    container.style.display = "grid";
  }
  document.getElementById('sidebar-lectures')
    .addEventListener('click', renderLectures);


    
function clearLectures() {
  const container = document.getElementById("main-div");
  container.innerHTML = "";
  container.style.display = "block";
}

 document.getElementById('sidebar-home').addEventListener('click', clearLectures);
  document.getElementById('sidebar-qr').addEventListener('click', clearLectures);
  document.getElementById('sidebar-attendance').addEventListener('click', clearLectures);
  document.getElementById('sidebar-image').addEventListener('click', clearLectures);
});

