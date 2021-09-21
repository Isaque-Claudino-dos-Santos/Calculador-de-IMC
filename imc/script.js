
function calcular() {
    formulaImc();
}

function formulaImc() {
    let pesso = document.querySelector("#pesso").value;
    let altura = document.querySelector("#altura").value;
    let calc = pesso / (altura * altura);
    exibir(calc);
}

function limpar() {
    document.querySelector("#pesso").value = "";
    document.querySelector("#altura").value = "";
}

function exibir(txt) {
    let resutado = document.querySelector(".resutado p");
    resutado.textContent = `Seu IMC é de: ${txt}`;
}