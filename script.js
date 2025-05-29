const result = document.querySelector(".result")
const myScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playing(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playing = (human, machine) => {


    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")) {
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Vitória da Máquina!"
    }
}