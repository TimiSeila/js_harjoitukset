const string_array = ["Johnny", "DeeDee", "Joey", "Marky"]

function concat(array) {
    return array.reduce((string, current) => {
        return string + current
    }, "")
}

const string_element = document.getElementById("string")
string_element.innerText = concat(string_array)
