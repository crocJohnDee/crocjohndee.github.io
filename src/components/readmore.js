export const readMore = (target, butonl, text) => {
  let textField = document.querySelector(`.${target}`);
  let buttonText = document.querySelector(`.${butonl}`);
  const fields = document.querySelectorAll(".exp") || undefined;
  const buttons = document.querySelectorAll(".butt");

  if (textField.style.display === "block") {
    if (text) {
      buttonText.innerHTML = "Learn more";
      textField.style.display = "none";
    } else {
      buttonText.classList.remove("fa-chevron-circle-up");
      buttonText.classList.add("fa-chevron-circle-down");
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
      buttons.forEach(x => x.classList.add("fa-chevron-circle-up"));
      buttons.forEach(x => x.classList.remove("fa-chevron-circle-up"));
      buttonText.classList.add("fa-chevron-circle-up");
      fields.forEach(x => (x.style.display = "none"));
      textField.style.display = "block";
    }
  }
};
