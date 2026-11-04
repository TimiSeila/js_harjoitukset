const year = parseInt(prompt("Give a year"));
let is_leap_year = false;

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    is_leap_year = true;
}

const leap_year_text = document.getElementById("leap_year_text");
leap_year_text.innerText = is_leap_year ? `${year} is a leap year` : `${year} is not a leap year`;
