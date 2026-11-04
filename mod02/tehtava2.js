const roll_number = parseInt(prompt("How many dice to roll"))
const target_sum = parseInt(prompt("Target sum"))
const simulation_count = parseInt(prompt("How many times to simulate"))

let successful_rolls = 0
for(let i = 0; i < simulation_count; i++){
    let sum = 0;
    for (let j = 0; j < roll_number; j++){
        const rolled = Math.floor(Math.random() * (7 - 1) + 1)
        sum += rolled
        console.log("roll number,", j + 1)
        console.log(rolled)
    }
    if (sum === target_sum){
        successful_rolls++
    }
}

const odds = (successful_rolls / simulation_count * 100).toFixed(2)
const probability_text = document.getElementById("probability_text")
probability_text.innerText = `Probability to get sum ${target_sum} with ${roll_number} is ${odds}%`
