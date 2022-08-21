export default function luhnChk(value) {
  const number = value.toString().replace(/\D/g, '');
  let nCheck = 0;
  let bEven = false;
  for (let n = number.length - 1; n >= 0; n -= 1) {
    let nDigit = parseInt(number.charAt(n), 10);
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return (nCheck % 10) === 0;
}
