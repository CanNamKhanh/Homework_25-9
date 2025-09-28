const enterNumber = 21;
let isPrime = true;

if (enterNumber < 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= enterNumber - 1; i++) {
    if (enterNumber % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime == true) {
  document.body.innerHTML = `<h1>Kiểm tra số nguyên tố</h1> <br> Số <strong>${enterNumber}</strong> là số nguyên tố`;
} else {
  document.body.innerHTML = `<h1>Kiểm tra số nguyên tố</h1> <br> Số <strong>${enterNumber}</strong> không phải là số nguyên tố`;
}
