const a = 5;
const b = 9;
let evenNumbers = ``;
let oddNumbers = ``;
let evenTotal = 0;
let oddTotal = 0;

for (let i = a; i <= b; i++) {
  if (i % 2 === 0) {
    if (i < b - 2) {
      evenNumbers += `${i} + `;
    } else {
      evenNumbers += `${i} =`;
    }
    evenTotal += i;
  }
  if (i % 2 !== 0) {
    if (i < b - 1) {
      oddNumbers += `${i} + `;
    } else {
      oddNumbers += `${i} =`;
    }
    oddTotal += i;
  }
}
console.log(evenNumbers, evenTotal);
console.log(oddNumbers, oddTotal);

document.body.innerHTML = `<h1>Tính tổng dãy số chẵn/lẻ trong khoảng ${a} - ${b}</h1> <br> Tổng số chẵn: ${evenNumbers} ${evenTotal} <br><br> Tổng số lẻ: ${oddNumbers} ${oddTotal} `;
