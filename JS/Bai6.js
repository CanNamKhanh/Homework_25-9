let column = ``;

for (let i = 1; i <= 8; i++) {
  column += `<tr>`;
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      column = column + `<td style="background-color: white;"></td>`;
    } else {
      column = column + `<td style="background-color: black;"></td>`;
    }
  }
  column += `</tr>`;
}

document.body.innerHTML = ` <table border="1" width="100%" cellspacing="0" cellpadding="90"> ${column} </table>`;
