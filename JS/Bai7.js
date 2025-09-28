let n = (Math.random() * 10).toFixed(0);
// let n = 5;
let row = ``;
let num = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  row += `<br>`;
  console.log(row);
}
// console.log(`${j}`);

let html = row;
document.body.innerHTML = `<h1>Vẽ hình tam giác gồm ${n} dòng</h1> <br> ${html}`;
