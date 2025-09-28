document.addEventListener('DOMContentLoaded', () => {
  const detailForm = document.querySelector("form");

  detailForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      firstname: detailForm.firstname.value.trim(),
      lastname: detailForm.lastname.value.trim(),
      dob: detailForm.dob.value.trim(),
      address: detailForm.address.value.trim(),
      course: detailForm.course.value.trim(),
      year: detailForm.year.value,
      contact: detailForm.contact.value.trim(),
      hobbies: Array.from(detailForm.querySelectorAll("input[name='hobby']:checked"))
                    .map(cb => cb.value)
    };

    if (!formData.firstname || !formData.lastname || !formData.dob || !formData.address ||
        !formData.course || !formData.year || !formData.contact) {
      alert("Please fill all required fields.");
      return;
    }

    window.location.href = "app1.html";
  });
});
