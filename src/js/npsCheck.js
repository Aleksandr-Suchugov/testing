import popup from './popup';

export default function paymentSysCheck(value) {
  let paymentSystemType = '';
  if (value) {
    switch (value[0]) {
      case 2:
        paymentSystemType = 'mir';
        break;
      case 3:
        if (value[1] === (0 || 6 || 8)) {
          paymentSystemType = 'dinersclub';
        } else if (value[1] === (4 || 7)) {
          paymentSystemType = 'americanExpress';
        } else if (value[1] === 5) {
          paymentSystemType = 'jcb';
        } else return popup();
        break;
      case 4:
        if (value[1] === (8 || 1 || 0)) {
          paymentSystemType = 'visaElectron';
        } else paymentSystemType = 'visa';
        break;
      case 5:
        if (value[1] === 0) {
          paymentSystemType = 'maestro';
        } else paymentSystemType = 'mastercard';
        break;
      case 6:
        if (value[1] === 7) {
          paymentSystemType = 'maestro';
        } else paymentSystemType = 'unionPay';
        break;
      default:
        return popup();
    }
  } else {
    return popup();
  }
  return paymentSystemType;
}
