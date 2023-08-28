const container = document.querySelector(".container");
const count = document.querySelector(".count");
const btns = document.querySelectorAll(".btn");
const decrease = document.querySelector(".decrease-btn");
const reset = document.querySelector(".reset-btn");
const increase = document.querySelector(".increase-btn");
let value = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    counter(e);
  });
});

function counter(e) {
  if (e.target === decrease) {
    value -= 1;
    count.textContent = value;
    value < 0 ? (count.style.color = "red") : null;
    value === 0 ? (count.style.color = "#0f2a41") : null;
  } else if (e.target === increase) {
    value += 1;
    count.textContent = value;
    value > 0 ? (count.style.color = "green") : null;
    value === 0 ? (count.style.color = "#0f2a41") : null;
  } else {
    value = 0;
    count.textContent = value;
    count.style.color = "#222";
  }
}
