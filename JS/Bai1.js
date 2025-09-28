document.body.innerHTML = "<h1>Bài 1</h1>";

let totalPrice;
let electricNumber = 405;
const electricNumber1 = 50;
const electricNumber2 = 100;
const electricNumber3 = 200;
const electricNumber4 = 300;
const electricNumber5 = 400;

const price1 = 1678;
const price2 = 1734;
const price3 = 2014;
const price4 = 2536;
const price5 = 2834;
const price6 = 2927;

if (electricNumber < 0) {
  console.log("Giá trị không hợp lệ");
} else {
  if (electricNumber <= electricNumber1) {
    totalPrice = electricNumber * price1;
  } else if (
    electricNumber > electricNumber1 &&
    electricNumber <= electricNumber2
  ) {
    totalPrice =
      electricNumber1 * price1 + (electricNumber - electricNumber1) * price2;
  } else if (
    electricNumber > electricNumber2 &&
    electricNumber <= electricNumber3
  ) {
    totalPrice =
      electricNumber1 * price1 +
      (electricNumber2 - electricNumber1) * price2 +
      (electricNumber - electricNumber2) * price3;
  } else if (
    electricNumber > electricNumber3 &&
    electricNumber <= electricNumber4
  ) {
    totalPrice =
      electricNumber1 * price1 +
      (electricNumber2 - electricNumber1) * price2 +
      (electricNumber3 - electricNumber2) * price3 +
      (electricNumber - electricNumber3) * price4;
  } else if (
    electricNumber > electricNumber4 &&
    electricNumber <= electricNumber5
  ) {
    totalPrice =
      electricNumber1 * price1 +
      (electricNumber2 - electricNumber1) * price2 +
      (electricNumber3 - electricNumber2) * price3 +
      (electricNumber4 - electricNumber3) * price4 +
      (electricNumber - electricNumber4) * price5;
  } else {
    totalPrice =
      electricNumber1 * price1 +
      (electricNumber2 - electricNumber1) * price2 +
      (electricNumber3 - electricNumber2) * price3 +
      (electricNumber4 - electricNumber3) * price4 +
      (electricNumber5 - electricNumber4) * price5 +
      (electricNumber - electricNumber5) * price6;
  }
  console.log("Số tiền điện phải đóng là:", totalPrice);
}
document.body.innerHTML = `<h1>Bài 1</h1> <br> <p>Nếu số điện là <strong>${electricNumber}</strong> thì số tiền điện phải đóng là: <strong>${totalPrice}</strong> đồng</p> `;
