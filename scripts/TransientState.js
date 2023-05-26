// Set up the transient state data structure and provide initial valuess
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state

export const setOwnsBlueJeans = (chosenOwnersip) => {
    transientState.ownsBlueJeans = chosenOwnersip
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}
// Function to convert transient state to permanent state

export const saveSurveySubmission = async () => {
    const postOption = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/submissions", postOption)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}