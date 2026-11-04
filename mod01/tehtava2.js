const user_name = prompt("What is your name?");
console.log(`Hello, ${user_name}!`);

const name_element = document.getElementById("name");
name_element.innerText = `Hello, ${user_name}!`;
