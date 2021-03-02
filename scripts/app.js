const slider = document.querySelector("#bar");
            const value = document.querySelector(".value");
            value.textContent = slider.value;
            slider.oninput = function(){
                value.textContent = this.value + "%";
            }

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputPeriodo = document.getElementById("periodo");

let resultado = document.getElementById("resultado");

const calcular = () => {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let periodo = inputPeriodo.value;
    
    let totalCarne = carnePP(periodo) * adultos + (carnePP(periodo)/2 * criancas);
    let totalCerveja = cervejaPP(periodo) * adultos;
    let totalBebida = bebidaPP(periodo) * adultos + (bebidaPP(periodo)/2 * criancas);
    let totalFarofa = farofaPP(periodo) * adultos + (farofaPP(periodo)/2 * criancas);
    let totalVinagrete = vinagretePP(periodo) * adultos + (vinagretePP(periodo)/2 * criancas);
    console.log(vinagretePP(periodo));

    //variaveis receberao os valores e calcularao com base nas carnes selecionadas
    // retornar div com os resultados impressos

    imprimeCarne(totalCarne);
    imprimeLiquidos(totalCerveja, totalBebida, slider.value);
    imprimeAcompanhamentos(totalFarofa, totalVinagrete);

}

const carnePP = (periodo) => {
    if(periodo >= 6)
        return 650;
    else
        return 400;
}

const cervejaPP = (periodo) => {
    if(periodo >= 6)
        return 2000;
    else
        return 1200;
}

const bebidaPP = (periodo) => {
    if(periodo >= 6)
        return 1500;
    else
        return 1000;
}

const farofaPP = (periodo) => {
    if(periodo >= 6)
        return 80;
    else
        return 50;
}

const vinagretePP = (periodo) => {
    if(periodo >= 6)
        return 100;
    else
        return 80;
}


const imprimeCarne = (total) => {
    let quantidade = 0;
    let carnes = ["bovina", "linguica", "frango"];

    for (carne of carnes){
        switch (carne){
            case 'bovina':
                quantidade = Math.ceil((total * .6)/1000)
                console.log(quantidade+ "Kg de carne bovina");
                resultado.innerHTML = `<p>${quantidade} Kg de carne bovina</p>`
                break;
            case 'linguica':
                quantidade = Math.ceil((total * .25)/1000)
                console.log(quantidade+ "Kg de linguiça");
                resultado.innerHTML += `<p>${quantidade} Kg de linguiça</p>`
                break;
            case 'frango':
                quantidade = Math.ceil((total * .15)/1000)
                console.log(quantidade+ "Kg de frango");
                resultado.innerHTML += `<p>${quantidade} Kg de frango</p>`
                break;
            }
    } 
    return
}

const imprimeLiquidos = (cerveja, bebida, porcentagem) => {
    let decimal = porcentagem/100;
    quantidadeCerveja = Math.ceil((cerveja * decimal)/1000);
    quantidadeBebida = Math.ceil((bebida * (1-decimal))/1000);
    console.log(1-decimal);
    quantidadeCerveja? console.log(quantidadeCerveja + " L de cerveja"):"";
    quantidadeCerveja? (resultado.innerHTML += `<p>${quantidadeCerveja} L de cerveja</p>`):"";
    quantidadeBebida? console.log(quantidadeBebida + " L de bebidas"):"";
    quantidadeBebida? (resultado.innerHTML += `<p>${quantidadeBebida} L de bebidas</p>`):"";

    return;
}

const imprimeAcompanhamentos = (farofa, vinagrete) => {
    if (document.getElementById("farofa").checked == true)
        resultado.innerHTML += `<p>${farofa} g de farofa</p>`

    if (document.getElementById("vinagrete").checked == true)
        resultado.innerHTML += `<p>${vinagrete} g de vinagrete</p>`    
}

const verifica = () => {
    let adultos = document.getElementById("adultos");
    let periodo = document.getElementById("periodo");

    if ((adultos.value==0) || (periodo.value==0)){
        window.alert("Os dados não foram inseridos corretamente, por favor insira o periodo e o numero de adultos do churrasco.");
    }
    else{
        calcular();
    }
}