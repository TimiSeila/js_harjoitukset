const number_list = []
while (true){
    const number = prompt("Give number")
    if (number === "0"){
        break
    }
    number_list.push(parseInt(number))
}

number_list.sort((x, y) => x - y).forEach((number) => {
    console.log(number)
})
