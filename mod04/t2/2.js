const list = document.getElementById("target")

const entry_1 = document.createElement("li");
entry_1.innerText = "First item";
const entry_2 = document.createElement("li");
entry_2.innerText = "Second item";
entry_2.className = "my-item"
const entry_3 = document.createElement("li");
entry_3.innerText = "Third item";

list.appendChild(entry_1);
list.appendChild(entry_2);
list.appendChild(entry_3);
