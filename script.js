let popLogo = document.querySelector(".pop-up-logo");
let buttonClick = document.querySelector("button");

buttonClick.addEventListener("click", () => {
  popLogo.classList.toggle("hidden");
});
