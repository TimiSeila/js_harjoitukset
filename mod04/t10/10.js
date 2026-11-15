const form = document.getElementById("source")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const firstname = form.elements["firstname"].value
    const lastname = form.elements["lastname"].value

    const text = document.getElementById("target")
    text.innerText = `Your name is ${firstname} ${lastname}`
})
