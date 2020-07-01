let items = document.querySelectorAll(".item");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let drop = document.querySelector(".dropdown");

one.addEventListener("mouseover", () => {
  drop.classList.add("active");
});
one.addEventListener("mouseleave", () => {
  drop.classList.remove("active");
});
two.addEventListener("mouseover", () => {
  drop.classList.add("activetwo");
});
two.addEventListener("mouseout", () => {
  drop.classList.remove("activetwo");
});
three.addEventListener("mouseover", () => {
  drop.classList.add("activethree");
});
three.addEventListener("mouseout", () => {
  drop.classList.remove("activethree");
});
four.addEventListener("mouseover", () => {
  drop.classList.add("activefour");
});
four.addEventListener("mouseout", () => {
  drop.classList.remove("activefour");
});

// items.forEach((item) => {
//   item.addEventListener("mouseover", () => {
//     drop.classList.add("active");
//   });
//   item.addEventListener("mouseleave", () => {
//     drop.classList.remove("active");
//   });
// });
