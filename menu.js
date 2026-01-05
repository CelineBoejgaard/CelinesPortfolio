const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
/* Tema 4 */
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const content = dropdown.querySelector(".dropdown-content");

  btn.addEventListener("click", () => {
    content.classList.toggle("show");
  });
});

/* Tema 4 */

/* Om mig forms */
const form = document.querySelector("form");

form.addEventListener("invalid", cancelPopup, true);

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
const EmailOutput = document.querySelector("#Email_output");
const forslagOutput = document.querySelector("#forslag_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}
/* Om mig forms slut*/
