// Atividade 1
let nome = "Kauã Vinícius de Souza Melo";
let idade = 20;

console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`);

// Atividade 2

let nome2 = "Kauã Vinícius de Souza Melo";
let cidade = "Recife";

console.log(`${nome2} é de ${cidade}.`);

// Atividade 3

let num1 = 10;
let num2 = 5;

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);
console.log(`Divisão: ${divisao}`);


// Atividade 4

let base = 10; 
let altura = 5; 

let area = (base * altura) / 2;

console.log(`A área do triângulo é ${area}`);


// Atividade 5

let nota1 = 10.0; 
let nota2 = 8.0; 
let nota3 = 8.0; 

let media = (nota1 + nota2 + nota3) / 3;

console.log(`O resultado é ${media}.`);

// Atividade 6

let precoOriginal = 100; 
let percentualDesconto = 20; 

let desconto = (precoOriginal * percentualDesconto) / 100;
let precoFinal = precoOriginal - desconto;

console.log(`O preço final do produto com desconto é R$ ${precoFinal.toFixed(2)}`);

// Atividade 7

let salarioBruto = 5000; 
let imposto;

if (salarioBruto <= 1903.98) {
    imposto = 0;
} else if (salarioBruto <= 2826.65) {
    imposto = (salarioBruto * 0.075) - 142.80;
} else if (salarioBruto <= 3751.05) {
    imposto = (salarioBruto * 0.15) - 354.80;
} else if (salarioBruto <= 4664.68) {
    imposto = (salarioBruto * 0.225) - 636.13;
} else {
    imposto = (salarioBruto * 0.275) - 869.36;
}

console.log(`O imposto de renda a ser pago é R$ ${imposto.toFixed(2)}`);

// Atividade 8

let valorOriginal = 100; 
let taxaCambio = 5.43; 

let valorConvertido = valorOriginal * taxaCambio;

console.log(`$ ${valorOriginal} convertidos são equivalentes a R$ ${valorConvertido.toFixed(2)} na moeda final.`);

// Atividade 9

let temperaturaCelsius = 50; 

let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

console.log(`A temperatura de ${temperaturaCelsius}°C é equivalente a ${temperaturaFahrenheit.toFixed(2)}°F`);


// Atividade 10

let peso = 70; 
let altura10 = 1.69; 

let imc = peso / (altura * altura);

console.log(`Seu IMC é ${imc.toFixed(2)}`);