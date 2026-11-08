const dog_list = []
dog_list.push(prompt("Dog 1. name"))
dog_list.push(prompt("Dog 2. name"))
dog_list.push(prompt("Dog 3. name"))
dog_list.push(prompt("Dog 4. name"))
dog_list.push(prompt("Dog 5. name"))
dog_list.push(prompt("Dog 6. name"))

dog_list_element = document.getElementById("dog_list")
dog_list.sort().reverse().forEach((dog) => {
    const dog_entry = document.createElement("li")
    dog_entry.innerText = dog
    dog_list_element.appendChild(dog_entry)
})
