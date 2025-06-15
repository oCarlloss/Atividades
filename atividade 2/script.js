function ex1() {
  let cotacao = Number(document.getElementById('cotacao1').value);
  let res = `
    +1%: ${(cotacao * 1.01).toFixed(2)}<br>
    +2%: ${(cotacao * 1.02).toFixed(2)}<br>
    +5%: ${(cotacao * 1.05).toFixed(2)}<br>
    +10%: ${(cotacao * 1.10).toFixed(2)}
  `;
  document.getElementById('res1').innerHTML = res;
}

function ex2() {
  let pessoas = Number(document.getElementById('pessoas2').value);
  let ovos = pessoas * 2;
  let queijo = pessoas * 50;
  document.getElementById('res2').innerText = 
    `Serão necessários ${ovos} ovos e ${queijo}g de queijo.`;
}

function ex3() {
  let n1 = Number(document.getElementById('n1_3').value);
  let n2 = Number(document.getElementById('n2_3').value);
  let soma = n1 + n2;
  let sub = n1 - n2;
  let mult = n1 * n2;
  let div = n2 !== 0 ? (n1 / n2).toFixed(2) : 'Divisão por zero';
  document.getElementById('res3').innerHTML = 
    `Soma: ${soma}<br>` +
    `Subtração: ${sub}<br>` +
    `Multiplicação: ${mult}<br>` +
    `Divisão: ${div}`;
}

function ex4() {
  let sabores = [
    document.getElementById('sabor1_4').value,
    document.getElementById('sabor2_4').value,
    document.getElementById('sabor3_4').value,
    document.getElementById('sabor4_4').value
  ];
  let refri = Number(document.getElementById('refri4').value);
  let totalPizza = 12 * sabores.length;
  let totalRefri = 7 * refri;
  let total = totalPizza + totalRefri;
  document.getElementById('res4').innerHTML =
    `Sabores escolhidos: ${sabores.join(', ')}<br>` +
    `Total a pagar: R$ ${total.toFixed(2)}`;
}
