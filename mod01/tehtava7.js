const number_of_throws = parseInt(prompt("How many times do I roll the dice"));

const roll_list_element = document.getElementById("roll_list");
const roll_sum_element = document.getElementById("roll_sum");

const rolls = [];

for (let i = 0; i < number_of_throws; i++){
    const random_number = Math.floor(Math.random() * (7 - 1) + 1);
    rolls.push(random_number);

    entry_element = document.createElement("li")
    entry_element.innerText = `Rolled: ${random_number}`
    roll_list_element.appendChild(entry_element)
}

roll_sum_element.innerText = `Sum: ${rolls.reduce((a, c) => a + c, 0)}`;
