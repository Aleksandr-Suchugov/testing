import popup from './popup';

export default function paymentSysType(value) {
  if (value) {
    if (value[0] === '2') {
      return 'mir';
    }
    if (value[0] === '3') {
      if (value[1] === ('0' || '6' || '8')) {
        return 'dinersclub';
      } else if (value[1] === ('4' || '7')) {
        return 'americanExpress';
      } else if (value[1] === '5') {
        return 'jcb';
      }
    }
    if (value[0] === '4') {
      if (value[1] === ('8' || '1' || '0')) {
        return 'visaElectron';
      } else return 'visa';
    }
    if (value[0] === '5') {
      if (value[1] === '0') {
        return 'maestro';
      } else return 'mastercard';
    }
    if (value[6]) {
      if (value[1] === '7') {
        return 'maestro';
      } else return 'unionPay';
    }
  } else return popup();
}
