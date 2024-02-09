const lt = gsap.timeline({ default: { duration: 0.75 } });
lt.from("img", {
  scale: 2,
  opacity: 0,
  ease: "elastic.out(1.5 , 2)",
  duration: 2,
});
lt.from(".word-1", { rotationX: "360deg", scale: 0, duration: 0.5 }, "<");
lt.from(".word-2", { y: -100, opacity: 0 }, "<50%");
lt.from(".word-3", { y: 100, opacity: 0 }, "<90%");
lt.from(".word-4", { opacity: 0 }, "<");
lt.from(".word-5", { y: -100, opacity: 0 }, "<");
lt.from(".word-6", { y: 100, opacity: 0 }, "<");

lt.from("button", { rotationX: "360deg" }, "<20%");

const logo = document.querySelector(".logo");

const letter = logo.textContent.split("");
logo.textContent = "";
letter.forEach((item) => {
  logo.innerHTML += `<span class="letter">${item}</span>`;
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: 30 },
  { y: 0, delay: 1, stagger: 0.02, ease: "back.out(3)" }
);
