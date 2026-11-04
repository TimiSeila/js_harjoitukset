const number = parseInt(prompt("Give a number"))
let is_prime_number = true

for (let i = 2; i < number; i++){
    if (number % i === 0){
        is_prime_number = false
    }
}

const prime_text_element = document.getElementById("prime_text")
prime_text_element.innerText = is_prime_number ? `${number} is a prime number` : `${number} is not a prime number`
