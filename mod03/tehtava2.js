const participant_amount = prompt("How many participants?")

const participants = []
for (i = 0; i < participant_amount; i++){
    participants.push(prompt("Give participant name"));
}

const participant_list_element = document.getElementById("participant_list")
participants.sort().forEach((participant) => {
    const participant_entry = document.createElement("li")
    participant_entry.innerText = participant
    participant_list_element.appendChild(participant_entry)
})
