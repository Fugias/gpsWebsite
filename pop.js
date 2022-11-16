const popclose = document.querySelectorAll(".closer_pop");
const pophide = document.querySelector(".pop_fixed");
const poppc = document.querySelector(".pop_pc");

popclose.forEach((e) => {
  e.addEventListener("click", () => {
    pophide.classList.add("display");
  });
});

const popopen = document.querySelectorAll(".pop_open");

popopen.forEach((e) => {
  e.addEventListener("click", () => {
    pophide.classList.remove("display");
  });
});
