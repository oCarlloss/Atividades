function ex1() {
  let l = Number(document.getElementById('largura1').value);
  let c = Number(document.getElementById('comprimento1').value);
  document.getElementById('res1').innerText = `Área do terreno: ${l * c} m²`;
}

function ex2() {
  let cavalos = Number(document.getElementById('cavalos2').value);
  document.getElementById('res2').innerText = `Ferraduras necessárias: ${cavalos * 4}`;
}

function ex3() {
  let pao = Number(document.getElementById('pao3').value);
  let broa = Number(document.getElementById('broa3').value);
  let total = (pao * 0.12) + (broa * 1.5);
  let poupanca = total * 0.10;
  document.getElementById('res3').innerHTML = 
    `Total arrecadado: R$ ${total.toFixed(2)}<br>Poupança (10%): R$ ${poupanca.toFixed(2)}`;
}

function ex4() {
  let nome = document.getElementById('nome4').value;
  let idade = Number(document.getElementById('idade4').value);
  let dias = idade * 365;
  document.getElementById('res4').innerText = `${nome.toUpperCase()}, VOCÊ JÁ VIVEU ${dias} DIAS`;
}

function ex5() {
  let preco = Number(document.getElementById('preco5').value);
  let valor = Number(document.getElementById('valor5').value);
  let litros = valor / preco;
  document.getElementById('res5').innerText = `Litros colocados: ${litros.toFixed(2)} L`;
}

function ex6() {
  let peso = Number(document.getElementById('peso6').value);
  let preco = peso * 12;
  document.getElementById('res6').innerText = `Valor a pagar: R$ ${preco.toFixed(2)}`;
}
