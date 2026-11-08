const candidates = []

const candidate_amount = parseInt(prompt("Number of candidates"))
for (let i = 0; i < candidate_amount; i++){
    const candidate_name = prompt("Candidate name").toLowerCase()
    candidates.push({
        "name": candidate_name,
        "votes": 0
    })
}

const voter_amount = parseInt(prompt("Number of voters"))
for (let i = 0; i < voter_amount; i++){
    const voted_name = prompt("Who you voting").toLowerCase()
    const candidate = candidates.find(candidate => candidate.name === voted_name)
    if (candidate){
        candidate.votes++
    }
}

candidates.sort((x, y) => y.votes - x.votes)

console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes`)
console.log("results:")
candidates.forEach((candidate) => {
    console.log(`${candidate.name}: ${candidate.votes} votes`)
})
