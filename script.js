(function () {
  "use strict";

  const submitForm = document.querySelector(".claim-btn");
  const invalidIcon = document.querySelectorAll(".invalid-icon");
  const invalidParagraph = document.querySelectorAll(".invalid-p");
  const input = document.querySelectorAll(".form-input");
  const emailInput = document.querySelector("#email");
  const invalidIconEmail = document.querySelector(".invalid-icon-email");
  const invalidParagraphEmail = document.querySelector(".invalid-p-email");

  function formSubmit() {
    submitForm.addEventListener("click", function () {
      input.forEach((element) => {
        if (element.value === "") {
          element.placeholder = "";
          invalidIcon.forEach((icon) => {
            if (icon.getAttribute("data-for") === element.getAttribute("id")) {
              icon.style.display = "block";
            }
          });
          invalidParagraph.forEach((paragraph) => {
            if (
              paragraph.getAttribute("data-for") === element.getAttribute("id")
            ) {
              paragraph.style.display = "flex";
            }
          });
          element.classList.add("error");
        }
      });
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailInput.value.match(mailformat)) {
        emailInput.classList.add("error");
        invalidIconEmail.style.display = "block";
        invalidParagraphEmail.style.display = "flex";
      }
      if (emailInput.value === "") {
        invalidParagraphEmail.innerHTML = "Email Address cannot be empty";
      }
    });
  }

  formSubmit();
})();
