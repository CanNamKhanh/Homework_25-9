// const n = 10;
const n = (Math.random() * 100).toFixed(0);
console.log(n);
let multiplication = ``;
let S = 0;

for (let i = 1; i <= n; i++) {
  if (i < n) {
    multiplication += `${i} x ${i + 1} + `;
    S += i * (i + 1);
  } else {
    multiplication += `${i} x ${i + 1} = `;
    S += i * (i + 1);
  }
}
console.log("S =", multiplication);
console.log(S);

document.body.innerHTML = `<h1>Tính giá trị biểu thức</h1> <br> S = ${multiplication} ${S}`;
