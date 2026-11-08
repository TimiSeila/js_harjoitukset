const numbers = []

while (true) {
    const number = parseInt(prompt("Enter a number: "));

    if (numbers.includes(number)) {
        break;
    }

    numbers.push(number);
}

numbers.sort((x, y) => x - y).forEach((number) => {
    console.log(number)
});
