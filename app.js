
const calcular = document.getElementById ('calcular')


function imc() {
    const nome = document.getElementById ('nome').value;
    const altura = document.getElementById ('altura').value;
    const peso = document.getElementById ('peso').value;
    const resultado = document.getElementById ('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classiFicacao = '';

        if(valorIMC < 18.5){
            classiFicacao = 'abaixo do peso!'
        }else if(valorIMC < 25){
            classiFicacao = 'com peso ideal, Parabens!'
        }else if(valorIMC < 30){
            classiFicacao = 'levemente acima do peso!'
        }else if(valorIMC < 35){
            classiFicacao = 'com obesidade Grau I.'
        }else if(valorIMC < 40){
            classiFicacao = 'com obesidade Grau II.'
        }else{
            classiFicacao = 'com obesidade Grau III. Obesidade morbida, Cuidado!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classiFicacao}`;

    }else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);
