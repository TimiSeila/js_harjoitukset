function even(array){
    return array.filter((number) => {
        return number % 2 == 0
    })
}

const number_array = [2, 7, 4];
console.log(number_array)
console.log(even(number_array))
