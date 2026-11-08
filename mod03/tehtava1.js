const numbers = [];
numbers.push(prompt("Number 1"))
numbers.push(prompt("Number 2"))
numbers.push(prompt("Number 3"))
numbers.push(prompt("Number 4"))
numbers.push(prompt("Number 5"))

for (i = numbers.length; i > 0; i--){
    console.log(numbers[i - 1])
}
