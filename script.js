const click = document.querySelectorAll(".click");

const menu = document.querySelector(".mobile_menu");
const header = document.querySelector(".header_wrap");

const menutl = gsap.timeline({ paused: true });

menutl.to(menu, {
  display: "block",
  x: 0,
});

menutl.to(
  ".menuin",
  {
    opacity: 0,
  },
  "<"
);

menutl.to(".links_menu li", {
  y: 0,
  stagger: 0.2,
  duration: 0.15,
});

click.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (menu.dataset.show === "hidden") {
      menutl.play();

      menu.dataset.show = "block";
    } else {
      menutl.reversed(!menutl.reversed());
      menu.dataset.show = "hidden";
    }
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 850) {
    menu.style.visibility = "hidden";
    header.style.opacity = "1";
  } else {
    menu.style.visibility = "visible";
  }
});

const boxes = document.querySelectorAll(".next_box");
let active = document.querySelector(".next_active");
const previous = document.querySelector(".previous_click");
const next = document.querySelector(".next_click");
const next_img = document.querySelectorAll(".next_img");

const next_text = document.querySelectorAll(".next_text");

next.addEventListener("click", () => {
  if (active.nextElementSibling.classList.contains("next_box")) {
    boxes.forEach((e, index) => {
      if (e.classList.contains("next_active")) {
        if (next_img[index - 1] == undefined) {
          gsap.to(next_img[4], {
            opacity: 0.0,
          });
        } else {
          gsap.to(next_img[index - 1], {
            opacity: 0,
          });
        }
        gsap.to(next_img[index], {
          x: "30%",
          y: "-5%",
          scale: 0.8,
          zIndex: 0,
          opacity: 0.2,
        });
        gsap.fromTo(
          next_img[index + 1],
          {
            x: "-30%",
            opacity: 0.2,
          },
          {
            x: 0,
            scale: 1,
            zIndex: 1,
            opacity: 1,
          }
        );
        if (next_img[index + 2] == undefined) {
          gsap.fromTo(
            next_img[0],
            {
              x: "-30%",
              y: "-5%",
            },
            {
              opacity: 0.2,
            }
          );
        } else {
          gsap.fromTo(
            next_img[index + 2],
            {
              x: "-30%",
              y: "-5%",
            },
            {
              opacity: 0.2,
            }
          );
        }

        gsap.to(next_text[index], {
          x: "30%",
          y: "-5%",
          scale: 0.8,
          opacity: 0,
        });
        gsap.fromTo(
          next_text[index + 1],
          {
            x: "-30%",
            y: "-5%",
            scale: 0.8,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }
        );
      }
    });

    active.nextElementSibling.classList.add("next_active");
    active.classList.remove("next_active");
    active = document.querySelector(".next_active");
  } else {
    gsap.to(next_img[3], {
      opacity: 0,
    });
    gsap.fromTo(
      next_img[0],
      {
        x: "-30%",
        opacity: 0.2,
      },
      {
        x: 0,
        scale: 1,
        zIndex: 1,
        opacity: 1,
      }
    );
    gsap.to(next_img[4], {
      x: "30%",
      y: "-5%",
      scale: 0.8,
      opacity: 0.2,
      zIndex: 0,
    });
    gsap.to(next_img[1], {
      x: "-30%",
      duration: 0,
    });
    gsap.to(next_img[1], {
      scale: 0.8,
      opacity: 0.2,
      zIndex: 0,
    });

    gsap.to(next_text[4], {
      x: "30%",
      y: "-5%",
      scale: 0.8,
      opacity: 0,
    });
    gsap.fromTo(
      next_text[0],
      {
        x: "-30%",
        y: "-5%",
        scale: 0.8,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }
    );

    boxes[0].classList.add("next_active");
    active.classList.remove("next_active");
    active = document.querySelector(".next_active");
  }
});

previous.addEventListener("click", () => {
  if (active.previousElementSibling != null) {
    boxes.forEach((e, index) => {
      if (e.classList.contains("next_active")) {
        gsap.to(next_img[index], {
          x: "-30%",
          y: "-5%",
          opacity: 0.2,
          scale: 0.8,
          zIndex: 0,
        });
        gsap.to(next_img[index - 1], {
          scale: 1,
          y: 0,
          x: 0,
          opacity: 1,
          zIndex: 1,
        });
        if (next_img[index + 1] == undefined) {
          gsap.to(next_img[0], {
            opacity: 0,
          });
          gsap.fromTo(
            next_img[index - 2],
            {
              x: "30%",
            },
            {
              y: "-5%",
              opacity: 0.2,
              scale: 0.8,
              zIndex: 0,
            }
          );
        } else {
          gsap.to(next_img[index + 1], {
            opacity: 0,
          });
          if (next_img[index - 2] == undefined) {
            gsap.fromTo(
              next_img[4],
              {
                x: "30%",
                y: "-5%",
              },
              {
                opacity: 0.2,
                scale: 0.8,
                zIndex: 0,
              }
            );
          } else {
            gsap.fromTo(
              next_img[index - 2],
              {
                x: "30%",
              },
              {
                y: "-5%",
                opacity: 0.2,
                scale: 0.8,
                zIndex: 0,
              }
            );
          }
        }

        gsap.to(next_text[index], {
          x: "-30%",
          y: "-5%",
          scale: 0.8,
          opacity: 0,
        });
        gsap.fromTo(
          next_text[index - 1],
          {
            x: "30%",
            y: "-5%",
            scale: 0.8,
          },
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }
        );
      }
    });

    active.previousElementSibling.classList.add("next_active");
    active.classList.remove("next_active");
    active = document.querySelector(".next_active");
  } else {
    gsap.to(next_img[0], {
      x: "-30%",
      y: "-5%",
      opacity: 0.2,
      scale: 0.8,
      zIndex: 0,
    });
    gsap.to(next_img[4], {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 1,
    });
    gsap.fromTo(
      next_img[3],
      {
        x: "30%",
        y: "-5%",
      },
      {
        opacity: 0.2,
        scale: 0.8,
      }
    );
    gsap.to(next_img[1], {
      opacity: 0,
    });

    gsap.to(next_text[0], {
      x: "-30%",
      y: "-5%",
      scale: 0.8,
      opacity: 0,
    });
    gsap.fromTo(
      next_text[4],
      {
        x: "30%",
        y: "-5%",
        scale: 0.8,
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
      }
    );

    boxes[4].classList.add("next_active");
    active.classList.remove("next_active");
    active = document.querySelector(".next_active");
  }
});
