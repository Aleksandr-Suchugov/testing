import iconSetter from './iconSetter';
import paymentSysCheck from './npsCheck';
import luhnChk from './luhn';
import popupError from './popupError';
import popupSuccess from './popupSuccess';

iconSetter();

const cardForm = document.querySelector('validate-form');
const inputField = cardForm.querySelector('validate-form__input');
cardForm.addEventListener('change', () => paymentSysCheck(inputField.innerText));

cardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (luhnChk(inputField.innerText)) {
    popupSuccess(paymentSysCheck(inputField.innerText));
  } else popupError();
});
