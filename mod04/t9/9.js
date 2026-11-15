const button = document.getElementById("start")
button.addEventListener("click", () => {
    const calculation = document.getElementById("calculation")
    let values;
    let result;
    switch (true){
        case calculation.value.includes("+"):
            values = calculation.value.split("+")
            result = parseInt(values[0]) + parseInt(values[1])
            break;
        case calculation.value.includes("-"):
            values = calculation.value.split("-")
            result = parseInt(values[0]) - parseInt(values[1])
            break;
        case calculation.value.includes("*"):
            values = calculation.value.split("*")
            result = parseInt(values[0]) * parseInt(values[1])
            break;
        case calculation.value.includes("/"):
            values = calculation.value.split("/")
            result = parseInt(values[0]) / parseInt(values[1])
            break;
    }

    const result_text = document.getElementById("result")
    result_text.innerText = result
})
