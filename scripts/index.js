const main = document.querySelector(".main");
const buttonTemplate = document.querySelector("#button-template");
const img = document.querySelector('.image')

function toggleBtn(obj, btn){
  if (obj.classList.contains('button_active')){
    obj.classList.remove('button_active')
    obj.querySelector('.button__text').classList.remove('button__text_active')
    obj.querySelector('.button__vector').src = "./images/Vector_11.svg"
    document.removeEventListener("keydown", handleCloseByClick)
  } else {
    obj.classList.add('button_active')
    document.addEventListener("keydown", handleCloseByClick)
    obj.querySelector('.button__text').classList.add('button__text_active')
    obj.classList.contains("button_active")
        ? (btn.src = "./images/Vector11.svg")
        : (btn.src = "./images/Vector_11.svg");
  }
  }
  
  function handleCloseByClick(evt) {
    if (evt.key === "Escape") {
      toggleBtn(document.querySelector(".button_active"));
    }
  }

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
    toggleBtn(button, buttonVector)
    handleCloseByClick()
  })
  
  return buttonElement;
}

function renderButtons(item, main) {
  main.prepend(getButtonElement(item));
}

buttons.forEach((item) => {
  renderButtons(item, main);
});
