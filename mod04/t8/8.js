const button = document.getElementById("start")
button.addEventListener("click", () => {
    const num1 = parseInt(document.getElementById("num1").value)
    const num2 = parseInt(document.getElementById("num2").value)

    const operation = document.getElementById("operation").value
    let result;
    switch (operation){
        case "add":
            result = num1 + num2
            break;
        case "sub":
            result = num1 - num2
            break;
        case "multi":
            result = num1 * num2
            break;
        case "div":
            result = num1 / num2
            break;
    }

    const result_text = document.getElementById("result")
    result_text.innerText = result
})
