const form = document.getElementsByTagName("form")[0];
const { submit, username, password } = form;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.validity.valid && password.validity.valid) return handleWave();
  [username, password].forEach((el) => {
    el.classList.toggle("valid", el.validity.valid);
    el.classList.toggle("invalid", !el.validity.valid);
  });

});

form.addEventListener("input", (e) => {
  e.preventDefault();
  [username, password].forEach((el) => {
    el.classList.remove("valid");
    el.classList.remove("invalid");
  });
});

function handleWave() {
  const wave = document.querySelector(".wave");
  const waveChar = document.querySelectorAll(".wave-char");

  waveChar.forEach((el) => el.classList.add("wave-char-show"));
  wave.classList.add("wave-show");

  const timeout = setTimeout(() => {
    waveChar.forEach((el) => el.classList.remove("wave-char-show"));
    wave.classList.remove("wave-show");
    clearTimeout(timeout);
  }, 3500);
}
