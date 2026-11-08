function roll_dice() {
    return Math.floor(Math.random() * 6) + 1;
}

const roll_list_element = document.getElementById("roll_list")

let roll
do {
    roll = roll_dice();
    const roll_entry = document.createElement("li")
    roll_entry.innerText = roll
    roll_list_element.appendChild(roll_entry)
} while (roll !== 6);
