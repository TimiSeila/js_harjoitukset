function roll_dice(number_of_sides) {
    return Math.floor(Math.random() * number_of_sides) + 1;
}

const roll_list_element = document.getElementById("roll_list")

const sides_amount = parseInt(prompt("How many sides on the die"))

let roll
do {
    roll = roll_dice(sides_amount);
    const roll_entry = document.createElement("li")
    roll_entry.innerText = roll
    roll_list_element.appendChild(roll_entry)
} while (roll !== sides_amount);
