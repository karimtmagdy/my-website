// |> Start Dark Mode
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");

toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
};
// |> End Dark Mode
// |> Start Progress
let section = document.querySelector(".skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop + 100) {
    console.log("good");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
};
// |> End Progress
