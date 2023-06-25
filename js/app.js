const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll(".contact__input");
const emailInput = document.querySelector(".contact__input-eamil");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((elem) => {
    if (!elem.value) {
      elem.parentElement.classList.add("error-input");
      setTimeout(() => {
        elem.parentElement.classList.remove("error-input");
      }, 2000);
    }
  });
  const val = emailInput.value.split("");
  console.log(val.includes("@"));
  if (!val.includes("@")) {
    emailInput.parentElement.classList.add("error-input");
    setTimeout(() => {
      emailInput.parentElement.classList.remove("error-input");
    }, 2000);
  }
});
