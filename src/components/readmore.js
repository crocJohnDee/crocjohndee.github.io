export const readMore = (target, butonl, text) => {
  let textField = document.querySelector(`.${target}`);
  let buttonText = document.querySelector(`.${butonl}`);
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
          console.log("end");
          textField.classList.remove("fold");
        }
      });
    }
  } else {
    if (text) {
      buttonText.innerHTML = "hide";
    } else {
      buttonText.classList.remove("fa-chevron-circle-down");
      buttonText.classList.add("fa-chevron-circle-up");
    }
    textField.style.display = "block";
    // textField.classList.add("unfold");
    // textField.addEventListener("animationend", () => {
    //   textField.classList.remove("unfold");
    // });
  }
};
