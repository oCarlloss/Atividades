function ex1() {
  let pago = Number(document.getElementById('valorPago1').value);
  let preco = Number(document.getElementById('precoProduto1').value);
  let troco = pago - preco;
  document.getElementById('res1').innerText = `Troco: R$ ${troco.toFixed(2)}`;
}

function ex2() {
  let valor = Number(document.getElementById('valorQuilo2').value);
  let qtd = Number(document.getElementById('qtdQuilos2').value);
  let total = valor * qtd;
  document.getElementById('res2').innerText = `Valor final: R$ ${total.toFixed(2)}`;
}

function ex3() {
  let saldo = Number(document.getElementById('saldo3').value);
  let novoSaldo = saldo * 1.01;
  document.getElementById('res3').innerText = `Saldo com reajuste: R$ ${novoSaldo.toFixed(2)}`;
}

function ex4() {
  let n1 = Number(document.getElementById('n1_4').value);
  let n2 = Number(document.getElementById('n2_4').value);
  let n3 = Number(document.getElementById('n3_4').value);
  let mediaArit = (n1 + n2 + n3) / 3;
  let mediaPond = (n1 * 3 + n2 * 2 + n3 * 5) / 10;
  let somaMedias = mediaArit + mediaPond;
  let mediaDasMedias = somaMedias / 2;
  document.getElementById('res4').innerText =
    `Média aritmética: ${mediaArit.toFixed(2)}\n` +
    `Média ponderada: ${mediaPond.toFixed(2)}\n` +
    `Soma das médias: ${somaMedias.toFixed(2)}\n` +
    `Média das médias: ${mediaDasMedias.toFixed(2)}`;
}

function ex5() {
  let v1 = Number(document.getElementById('v1_5').value);
  let v2 = Number(document.getElementById('v2_5').value);
  let maior = v1 > v2 ? v1 : v2;
  document.getElementById('res5').innerText = `Maior valor: ${maior}`;
}

function ex6() {
  let v = [
    Number(document.getElementById('v1_6').value),
    Number(document.getElementById('v2_6').value),
    Number(document.getElementById('v3_6').value),
    Number(document.getElementById('v4_6').value)
  ];
  let menor = Math.min(...v);
  document.getElementById('res6').innerText = `Menor valor: ${menor}`;
}

function ex7() {
  let val = Number(document.getElementById('val7').value);
  let msg = val % 2 !== 0 ? 'O número é ímpar.' : 'O número não é ímpar.';
  document.getElementById('res7').innerText = msg;
}
