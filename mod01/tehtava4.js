const user_name = prompt("What is your name");
const classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]

const random_number = Math.floor(Math.random() * (classes.length));
const selected_class = classes[random_number];

class_text = document.getElementById("class_text");
class_text.innerHTML = `${user_name}, you are ${selected_class}!`;
