import "./pages/index.css";

let offset = 0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.button-right').addEventListener('click', ()=>{
    offset += document.querySelector('.slider-line_block').clientWidth;
    if (offset > document.querySelector('.slider-line_block').clientWidth*2){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.button-left').addEventListener('click', ()=>{
    offset -= document.querySelector('.slider-line_block').clientWidth;
    if (offset < 0){
        offset = document.querySelector('.slider-line_block').clientWidth*2;
    }
    sliderLine.style.left = -offset + 'px';
});

const popupAdd = document.querySelector('.popup_type_add');
const buttonAdd = document.querySelector('.add-team');
const buttonClose = document.querySelector(".popup__close");

buttonAdd.addEventListener('click',()=>{
    popupAdd.classList.add("popup_is-opened");
})

buttonClose.addEventListener('click',()=>{
    popupAdd.classList.remove("popup_is-opened");
})


const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };
  
  
  const checkInputValidity = (formElement, inputElement) => {
    if (inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
      hideInputError(formElement, inputElement);
    }
  };
  
  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    inputList.forEach((inputElement) => {
      toggleButtonState(inputList, buttonElement);
      checkInputValidity(formElement, inputElement);
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return (!inputElement.validity.valid);
    });
  }
  
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('button_inactive');
    } else {
      buttonElement.classList.remove('button_inactive');
    };
  }
  
 function enableValidation(evt) {
    const formList = Array.from(document.querySelectorAll(evt));
    formList.forEach((formElement) => {
      console.log(formElement);
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }
  
  const enableValidationconst = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

enableValidation(enableValidationconst.formSelector);