const first_number = parseInt(prompt("Insert first number"));
const second_number = parseInt(prompt("Insert second number"));
const third_number = parseInt(prompt("Insert third number"));

const sum = first_number + second_number + third_number;
const product = first_number * second_number * third_number;
const average = (first_number + second_number + third_number) / 3

const first_number_element = document.getElementById("first_number")
first_number_element.innerText = `Sum: ${sum}`

const second_number_element = document.getElementById("second_number")
second_number_element.innerText = `Product: ${product}`

const third_number_element = document.getElementById("third_number")
third_number_element.innerText = `Average: ${average}`
