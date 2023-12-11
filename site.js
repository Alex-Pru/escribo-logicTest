const pS = require("prompt-sync")
const prompt = pS()

function sumDivisable(n){
    let divisableBy3Or5 = []

    for(let i = n-1; i > 0; i--){
        if(i % 3 === 0 || i % 5 === 0){
            divisableBy3Or5.push(i)
        }
        else{
        }
    }

    let sum = 0

    for(elements of divisableBy3Or5){
        sum += elements
    }
    console.log("A soma dos números divisíveis por 3 e 5, menores que o inserido é: " + sum)
    
}
function startApp(){
    const number = prompt("Escreva um número ")
    sumDivisable(Number(number))
    
}

startApp()