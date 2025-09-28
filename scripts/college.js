document.addEventListener("DOMContentLoaded", function() {
  function renderCollegeInfo() {
    const container = document.getElementById("main-div");
    container.innerHTML = `
      <div class="college-info-wrapper">
        <img src="thumbnails/college-photo.jpg"class="college-photo">
        <h2>Welcome to Our College!</h2>
        <p>Thanks for joining us.<br>
        College life is a journey filled with exciting 
        opportunities and unique challenges. 
        You may face intense academic pressure, time management hurdles, and the struggle to balance studies 
        with personal growth. Social adjustments and moments of self-doubt can also be part of this vibrant experience. However, 
        you are never alone—your professors and mentors are here to guide, 
        support, and inspire you throughout your journey. 
        In our college, you will have access to numerous events like 
        hackathons, workshops, and competitions designed to sharpen your skills 
        and open doors to real-world experiences. 
        These opportunities will help you grow not just academically, 
        but as a confident problem-solver ready to make an impact. Remember, 
        every challenge you face is a stepping stone towards your success. 
        Together, we will explore, learn, and achieve greatness.
        </p>
        <p class="motivation">“Together, we can achieve greatness!”</p>
        <div class="principal-sign-section">
          <div class="principal-signature">Kavya</div>
          <div class="principal-title">Head Principal</div>
        </div>
      </div>
    `;
  }
document.querySelector('.college-icon-container').addEventListener('click', renderCollegeInfo);
});
