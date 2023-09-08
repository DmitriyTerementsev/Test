const openBtnImg = "images/active.svg";
const closedBtnImg = "images/inactive.svg";
const main = document.querySelector(".main");
const buttonTemplate = document.querySelector("#button-template");
const img = document.querySelector(".image");
//закрытие кнопки
function closeBtn(obj) {
  obj.classList.remove("button_active");
  obj.querySelector(".button__text").classList.remove("button__text_active");
  obj.querySelector(".button__vector").src = closedBtnImg;
  img.removeEventListener("click", handleCloseByClick);
}
//открытие кнопки
function openBtn(obj, btn) {
  obj.classList.add("button_active");
  img.addEventListener("click", handleCloseByClick);
  obj.querySelector(".button__text").classList.add("button__text_active");
  obj.classList.contains("button_active")
    ? (btn.src = openBtnImg)
    : (btn.src = closedBtnImg);
}
//закрытие кнопки при нажатии на картинку(сейчас при нажатии закрываются все открытые кнопки)
function handleCloseByClick(evt) {
  if (!evt.target.classList.contains("button")) {
    //closeBtn(document.querySelector('.button_active'));
    const allOpenBtn = document.querySelectorAll(".button_active");
    for (let i = 0; i < allOpenBtn.length; i++) {
      closeBtn(document.querySelector(".button_active"));
    }
  }
}
//получение кнопки
function getButtonElement(buttons) {
  //получаем блок и его элементы
  const buttonElement = buttonTemplate.content.cloneNode(true);
  const button = buttonElement.querySelector(".button");
  const buttonText = buttonElement.querySelector(".button__text");
  const buttonVector = buttonElement.querySelector(".button__vector");
  //добавляем каждому блоку свойства
  buttonVector.src = closedBtnImg;
  buttonText.textContent = buttons.text;
  button.style.backgroundColor = buttons.color;
  button.style.border = buttons.color;
  button.style.top = buttons.positionY;
  button.style.left = buttons.positionX;
  //слушатель клика
  button.addEventListener("click", () => {
    if (!button.classList.contains("button_active")) {
      openBtn(button, buttonVector);
    } else {
      closeBtn(button);
    }
  });

  return buttonElement;
}
//добавление кнопок в контейнер
function renderButtons(item, main) {
  main.prepend(getButtonElement(item));
}
//рендер кнопок при загрузке
buttons.forEach((item) => {
  renderButtons(item, main);
});
