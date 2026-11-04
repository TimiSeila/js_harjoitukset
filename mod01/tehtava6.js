const confimation = confirm("Should I calculate the square root?");
let sqrt_text;

if (confimation){
    const number = parseInt(prompt("Give a number"));
    if (number < 0){
        sqrt_text = "The square root of a negative number is not defined";
    }
    else{
        sqrt_text = `Square root: ${Math.sqrt(number)}`;
    }
}
else{
    sqrt_text = "The square root is not calculated";
}

const sqrt_text_element = document.getElementById("sqrt_text");
sqrt_text_element.innerText = sqrt_text;
