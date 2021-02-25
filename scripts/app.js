//carnes - 450g por pessoa +6h=650g
//bovina 60% - linguica 25% - frango 15%
//cerveja - 1.2L por pessoa +6h=2L
//refrigerante/agua - 20% agua; 20% suco; 60% refri - - 1L por pessoa +6h=1.5L
//crianca metade
//farofa <= 10 pessoas = 500g; >10 = 1kg
//vinagrete <= 10 pesspas 1kg; >10 2kg

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

    //variaveis receberao os valores e calcularao com base nas carnes selecionadas
    // retornar div com os resultados impressos

    quantidadeCarne = distrCarne(totalCarne);

    console.log(totalCerveja/1000+" L de cerveja"); 
    console.log(totalBebida/1000+" L de bebida");

    if (document.getElementById("farofa").checked == true)
        console.log(totalFarofa/1000+" Kg de farofa");
    
    if (document.getElementById("vinagrete").checked == true)
        console.log(totalVinagrete/1000+" Kg de vinagrete");
    
    
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


const distrCarne = (total) => {
    let bovina = document.getElementById("bovina");
    let linguica = document.getElementById("linguica");
    let frango = document.getElementById("frango");
    let quantidade = 0;
    let carnes = [bovina, linguica, frango];

    for (carne of carnes){
        if (carne.checked){
            switch (carne.id){
                case 'bovina':
                    quantidade = Math.ceil((total * .6)/1000)
                    console.log(quantidade+ "Kg de carne "+carne.id);
                    break;
                case 'linguica':
                    quantidade = Math.ceil((total * .25)/1000)
                    console.log(quantidade+ "Kg de "+ carne.id);
                    break;
                case 'frango':
                    quantidade = Math.ceil((total * .15)/1000)
                    console.log(quantidade+ "Kg de "+ carne.id);
                    break;
            }
        }
    } 
    return
}