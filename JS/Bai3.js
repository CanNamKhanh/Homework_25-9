const randomNum = (Math.random() * 100).toFixed(0);
// const randomNum = 10;
// console.log(randomNum);
let evenNumbers = ``;
let oddNumbers = ``;

for (let i = 1; i <= randomNum - 1; i++) {
  if (i % 2 === 0) {
    if (i < randomNum - 2) {
      evenNumbers = evenNumbers + `${i}, `;
    } else {
      evenNumbers = evenNumbers + `${i}`;
    }
  } else {
    if (i < randomNum - 2) {
      oddNumbers = oddNumbers + `${i}, `;
    } else {
      oddNumbers = oddNumbers + `${i}`;
    }
  }
}

// console.log(evenNumbers);
// console.log(oddNumbers);

document.body.innerHTML = `<h1>Viết dãy số chẵn/lẻ nhỏ hơn ${randomNum}</h1> <br> Các số chẵn nhỏ hơn <strong>${randomNum}</strong> là: ${evenNumbers} <br><br> Các số lẻ nhỏ hơn <strong>${randomNum}</strong> là: ${oddNumbers}`;
