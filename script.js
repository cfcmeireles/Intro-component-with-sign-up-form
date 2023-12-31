(function () {
  "use strict";

  const submitForm = document.querySelector(".claim-btn");
  const invalidIcon = document.querySelectorAll(".invalid-icon");
  const invalidParagraph = document.querySelectorAll(".invalid-p");
  const input = document.querySelectorAll(".form-input");
  const emailInput = document.querySelector("#email");
  const invalidIconEmail = document.querySelector(".invalid-icon-email");
  const invalidParagraphEmail = document.querySelector(".invalid-p-email");

  var originalPlaceholder = [];
  for (let i = 0; i < input.length; i++) {
    originalPlaceholder.push(input[i].placeholder);
  }

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
        } else {
          for (let i = 0; i < input.length; i++) {
            input[i].placeholder = originalPlaceholder[i];
          }
          invalidIcon.forEach((icon) => {
            if (icon.getAttribute("data-for") === element.getAttribute("id")) {
              icon.style.display = "none";
            }
          });
          invalidParagraph.forEach((paragraph) => {
            if (
              paragraph.getAttribute("data-for") === element.getAttribute("id")
            ) {
              paragraph.style.display = "none";
            }
          });
          element.classList.remove("error");
        }
      });
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailInput.value.match(mailformat)) {
        emailInput.classList.add("error");
        invalidIconEmail.style.display = "block";
        invalidParagraphEmail.style.display = "flex";
        invalidParagraphEmail.innerHTML = "Looks like this is not an email";
      } else {
        emailInput.classList.remove("error");
        invalidIconEmail.style.display = "none";
        invalidParagraphEmail.style.display = "none";
      }
      if (emailInput.value === "") {
        invalidParagraphEmail.innerHTML = "Email Address cannot be empty";
      }
    });
  }

  formSubmit();
})();
