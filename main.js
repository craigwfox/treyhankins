document.querySelector("body").addEventListener("click", () => {
  setTimeout(() => {
    if (document.querySelector("audio")) {
      document.querySelector("audio").play();
      document.querySelector("audio").classList.add("playing");
    }
  }, 200);
});

document.addEventListener("scroll", () => {
  setTimeout(() => {
    if (document.querySelector("audio")) {
      document.querySelector("audio").play();
      document.querySelector("audio").classList.add("playing");
    }
  }, 200);
});
