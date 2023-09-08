const main = document.querySelector(".main");
const buttonTemplate = document.querySelector("#button-template");
const img = document.querySelector('.image')

function getButtonElement(buttons) {
  const buttonElement = buttonTemplate.content.cloneNode(true);
  const button = buttonElement.querySelector(".button");
  const buttonText = buttonElement.querySelector(".button__text");
  const buttonVector = buttonElement.querySelector(".button__vector");
  buttonText.textContent = buttons.text;
  button.style.backgroundColor = buttons.color;
  button.style.border = buttons.color;
  button.style.top = buttons.positionY;
  button.style.left = buttons.positionX;
  
  button.addEventListener("click", () => {
    button.classList.toggle("button_active");
    buttonText.classList.toggle("button__text_active");
    button.classList.contains("button_active")
      ? (buttonVector.src = "./images/Vector11.svg")
      : (buttonVector.src = "./images/Vector_11.svg");
    
  });

  return buttonElement;
}

function renderButtons(item, main) {
  main.prepend(getButtonElement(item));
}

buttons.forEach((item) => {
  renderButtons(item, main);
});
