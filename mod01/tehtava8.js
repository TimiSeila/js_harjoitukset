const start_year = parseInt(prompt("Give starting year"));
const end_year = parseInt(prompt("Give ending year"));

const leap_year_list = document.getElementById("leap_year_list")

for (let i = start_year; i <= end_year; i++){
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
        const leap_year_entry = document.createElement("li");
        leap_year_entry.innerText = i
        leap_year_list.appendChild(leap_year_entry)
    }
}
