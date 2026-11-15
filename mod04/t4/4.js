'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.getElementById("target");

for (let i = 0; i < students.length; i++){
    const entry = document.createElement("option");
    entry.innerText = students[i].name
    entry.value = students[i].id
    select.appendChild(entry)
}
