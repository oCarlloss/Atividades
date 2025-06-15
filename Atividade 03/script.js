// --- Atividade 7: Dias passados no ano ---
function calcularDiasAno() {
    const dia = parseInt(document.getElementById('dia7').value);
    const mes = parseInt(document.getElementById('mes7').value);
    const resultadoElement = document.getElementById('resultado7');

    if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 30 || mes < 1 || mes > 12) {
        resultadoElement.innerText = "Por favor, insira um dia e mês válidos.";        return;
    }
    const diasPassados = ((mes - 1) * 30) + dia;
    resultadoElement.innerText = `Se passaram ${diasPassados} dias desde o início do ano.`;
}

// --- Atividade 8: Venda de Camisetas ---
function calcularVendaCamisetas() {
    const qtdPequena = parseInt(document.getElementById('qtdPequena8').value);
    const qtdMedia = parseInt(document.getElementById('qtdMedia8').value);
    const qtdGrande = parseInt(document.getElementById('qtdGrande8').value);
    const resultadoElement = document.getElementById('resultado8');

    if (isNaN(qtdPequena) || isNaN(qtdMedia) || isNaN(qtdGrande) || qtdPequena < 0 || qtdMedia < 0 || qtdGrande < 0) {
         resultadoElement.innerText = "Por favor, insira quantidades válidas.";
         return;
    }
    const precoPequena = 10;
    const precoMedia = 12;
    const precoGrande = 15;

    const totalPequena = qtdPequena * precoPequena;
    const totalMedia = qtdMedia * precoMedia;
    const totalGrande = qtdGrande * precoGrande;

    const valorTotal = totalPequena + totalMedia + totalGrande;

    resultadoElement.innerText = `O valor total arrecadado é R$ ${valorTotal.toFixed(2)}.`;
}

// --- Atividade 9: Distância entre Dois Pontos ---
function calcularDistanciaPontos() {
    const x1 = parseFloat(document.getElementById('x1_9').value);
    const y1 = parseFloat(document.getElementById('y1_9').value);
    const x2 = parseFloat(document.getElementById('x2_9').value);
    const y2 = parseFloat(document.getElementById('y2_9').value);
    const resultadoElement = document.getElementById('resultado9');

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        resultadoElement.innerText = "Por favor, insira valores numéricos para todas as coordenadas.";        return;
    }
    const distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    resultadoElement.innerText = `A distância entre os pontos é: ${distancia.toFixed(2)}`;
}

// --- Atividade 10: Conversor de Tempo de Trabalho sem Acidentes ---
function converterTempoTrabalho() {
    const totalDias = parseInt(document.getElementById('totalDias10').value);
    const resultadoElement = document.getElementById('resultado10');

    if (isNaN(totalDias) || totalDias < 0) {
        resultadoElement.innerText = "Por favor, insira um número válido de dias.";        return;
    }
    const anos = Math.floor(totalDias / 360);
    const diasRestantesAposAnos = totalDias % 360;
    const meses = Math.floor(diasRestantesAposAnos / 30);
    const dias = diasRestantesAposAnos % 30;

    resultadoElement.innerText = `Tempo: ${anos} anos, ${meses} meses e ${dias} dias.`;
}

// --- Atividade 11: Cálculo de Salário ---
function calcularSalario() {
    const salarioInicial = parseFloat(document.getElementById('salarioInicial11').value);
    const resultadoInicialElement = document.getElementById('resultado11_inicial');
    const resultadoAumentoElement = document.getElementById('resultado11_aumento');
    const resultadoFinalElement = document.getElementById('resultado11_final');

    if (isNaN(salarioInicial) || salarioInicial < 0) {
        resultadoInicialElement.innerText = "Por favor, insira um salário inicial válido.";
        resultadoAumentoElement.innerText = "";
        resultadoFinalElement.innerText = "";
        return;
    }

    const salarioComAumento = salarioInicial * 1.15;
    const imposto = salarioComAumento * 0.08;
    const salarioFinal = salarioComAumento - imposto;

    resultadoInicialElement.innerText = `Salário Inicial: R$ ${salarioInicial.toFixed(2)}`;
    resultadoAumentoElement.innerText = `Salário com Aumento (15%): R$ ${salarioComAumento.toFixed(2)}`;
    resultadoFinalElement.innerText = `Salário Final (após 8% de imposto): R$ ${salarioFinal.toFixed(2)}`;
}

// --- Atividade 12: Extração de Centena, Dezena, Unidade ---
function extrairDigitos() {
    const numero = parseInt(document.getElementById('numero12').value);
    const resultadoElement = document.getElementById('resultado12');

    if (isNaN(numero) || numero < 0 || numero > 999) {
        resultadoElement.innerText = "Por favor, insira um número inteiro válido entre 0 e 999.";
        return;
    }

    const centena = Math.floor(numero / 100);
    const dezena = Math.floor((numero % 100) / 10);
    const unidade = numero % 10;

    resultadoElement.innerText = `CENTENA = ${centena} DEZENA = ${dezena} UNIDADE = ${unidade}`;
}

// --- Atividade 13: Área de uma Pizza ---
function calcularAreaPizza() {
    const raio = parseFloat(document.getElementById('raio13').value);
    const pi = 3.14;
    const resultadoElement = document.getElementById('resultado13');

    if (isNaN(raio) || raio < 0) {
        resultadoElement.innerText = "Por favor, insira um valor válido para o raio.";
        return;
    }


    const area = pi * Math.pow(raio, 2);
    resultadoElement.innerText = `A área da pizza é: ${area.toFixed(2)}`;
}

// --- Atividade 14: Divisão de Conta de Bar ---
function dividirContaBar() {
    const valorTotal = parseFloat(document.getElementById('valorTotal14').value);
    const resultadoCarlosElement = document.getElementById('resultado14_carlos');
    const resultadoAndreElement = document.getElementById('resultado14_andre');
    const resultadoFelipeElement = document.getElementById('resultado14_felipe');

    if (isNaN(valorTotal) || valorTotal < 0) {
        resultadoCarlosElement.innerText = "Por favor, insira um valor válido para a conta.";
        resultadoAndreElement.innerText = "";
        resultadoFelipeElement.innerText = "";
        return;
    }
   

    const valorPorPessoaInteiro = Math.floor(valorTotal / 3);
    const valorCarlos = valorPorPessoaInteiro;
    const valorAndre = valorPorPessoaInteiro;
    const valorFelipe = valorTotal - valorCarlos - valorAndre;

    resultadoCarlosElement.innerText = `Carlos deve pagar: R$ ${valorCarlos.toFixed(2)}`;
    resultadoAndreElement.innerText = `André deve pagar: R$ ${valorAndre.toFixed(2)}`;
    resultadoFelipeElement.innerText = `Felipe deve pagar: R$ ${valorFelipe.toFixed(2)}`;
}