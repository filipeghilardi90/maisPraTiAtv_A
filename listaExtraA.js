const prompt = require('prompt-sync')(); // Adiciona a biblioteca prompt-sync para receber entrada do usuário no Node.js

function fibonacciSequence() {
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= 10; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

function isPrime(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
    return false;
}

function printTriangle() {
    let rows = 5;
    for (let i = 1; i <= rows; i++) {
        let output = '';
        for (let j = 1; j <= i; j++) {
            output += j + ' ';
        }
        console.log(output);
    }
}

function factorial(num) {
    let factorial = 1;
    while (num > 0) {
        factorial *= num;
        num--;
    }
    return factorial;
}

function reverseNumber(num) {
    let reversedNum = 0;
    while (num !== 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversedNum;
}

function isPalindrome(num) {
    let originalNum = num;
    let reversedNum = 0;
    while (num !== 0) {
        reversedNum = reversedNum * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return originalNum === reversedNum;
}

function countDigits(num) {
    let count = 0;
    do {
        num = Math.floor(num / 10);
        count++;
    } while (num !== 0);
    return count;
}

function sumDigits(num) {
    let sumDigits = 0;
    do {
        sumDigits += num % 10;
        num = Math.floor(num / 10);
    } while (num !== 0);
    return sumDigits;
}

function printStars() {
    let rows = 5;
    do {
        let star = '';
        for (let i = 0; i < rows; i++) {
            star += '*';
        }
        console.log(star);
        rows--;
    } while (rows > 0);
}

function gcd(num1, num2) {
    do {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    } while (num2 !== 0);
    return num1;
}

function menu() {
    console.log("Escolha um exercício para executar:");
    console.log("1 - Imprimir sequência de Fibonacci");
    console.log("2 - Verificar se um número é primo");
    console.log("3 - Imprimir um triângulo de números");
    console.log("4 - Calcular o fatorial de um número");
    console.log("5 - Inverter os dígitos de um número");
    console.log("6 - Verificar se um número é palíndromo");
    console.log("7 - Contar o número de dígitos de um número");
    console.log("8 - Calcular a soma dos dígitos de um número");
    console.log("9 - Imprimir um padrão de estrela decrescente");
    console.log("10 - Encontrar o maior divisor comum (MDC) de dois números");

    const choice = parseInt(prompt("Digite o número do exercício que deseja executar: "));
    
    switch (choice) {
        case 1:
            fibonacciSequence();
            break;
        case 2:
            const primeNum = parseInt(prompt("Digite um número para verificar se é primo: "));
            console.log(isPrime(primeNum) ? `${primeNum} é primo` : `${primeNum} não é primo`);
            break;
        case 3:
            printTriangle();
            break;
        case 4:
            const factNum = parseInt(prompt("Digite um número para calcular o fatorial: "));
            console.log(`O fatorial é ${factorial(factNum)}`);
            break;
        case 5:
            const reverseNum = parseInt(prompt("Digite um número para inverter os dígitos: "));
            console.log(`Número invertido: ${reverseNumber(reverseNum)}`);
            break;
        case 6:
            const palindromeNum = parseInt(prompt("Digite um número para verificar se é palíndromo: "));
            console.log(isPalindrome(palindromeNum) ? `${palindromeNum} é palíndromo` : `${palindromeNum} não é palíndromo`);
            break;
        case 7:
            const countNum = parseInt(prompt("Digite um número para contar os dígitos: "));
            console.log(`Número de dígitos: ${countDigits(countNum)}`);
            break;
        case 8:
            const sumNum = parseInt(prompt("Digite um número para calcular a soma dos dígitos: "));
            console.log(`Soma dos dígitos: ${sumDigits(sumNum)}`);
            break;
        case 9:
            printStars();
            break;
        case 10:
            const num1 = parseInt(prompt("Digite o primeiro número: "));
            const num2 = parseInt(prompt("Digite o segundo número: "));
            console.log(`MDC é: ${gcd(num1, num2)}`);
            break;
        default:
            console.log("Escolha inválida. Por favor, tente novamente.");
    }
}

menu();
