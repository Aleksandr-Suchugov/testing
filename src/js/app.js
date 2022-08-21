import '../css/style.css';
import NPSicons from './NPSicons';
import paymentSysType from './npsCheck';
import luhnChk from './luhn';
import CallResponses from './serverResponse';

window.addEventListener('load', () => {
  const iconManager = new NPSicons();
  iconManager.iconSetter();

  const response = new CallResponses();
  const cardForm = document.querySelector('.validate-form');
  const resetBtn = document.querySelector('.reset-button');
  const inputField = document.getElementById('validate-form__input');

  cardForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const cardType = paymentSysType(inputField.value);
    if (cardType && luhnChk(inputField.value)) {
      response.cardTypeFound(cardType);
    } else if (inputField.value !== '') {
      response.cardTypeNotFound();
    }
  });

  resetBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    response.inputClear();
  });
});
