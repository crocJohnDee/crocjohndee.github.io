export const readMore = (target, butonl, text) => {
  let textField = document.querySelector(`.${target}`);
  let buttonText = document.querySelector(`.${butonl}`);
  const fields = document.querySelectorAll(".exp") || undefined;

  if (textField.style.display === "block") {
    if (text) {
      buttonText.innerHTML = "Learn more";
      textField.style.display = "none";
    } else {
      textField.classList.add("fold");
      textField.addEventListener("animationend", () => {
        if (textField.classList.contains("fold")) {
          textField.style.display = "none";
          textField.classList.remove("fold");
        }
      });
    }
  } else {
    if (text) {
      buttonText.innerHTML = "hide";
      textField.style.display = "block";
    } else {
      fields.forEach(x => (x.style.display = "none"));
      textField.style.display = "block";
    }
  }
};
