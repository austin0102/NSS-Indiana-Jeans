import { ownsJeansFunc } from "./OwnsJeans.js"
import { saveSubmission } from "./SaveSubmissions.js"
import { SubmissionList } from "./Submissions.js"
import { locationChoices } from "./UrbanDwellers.js"

const container = document.querySelector("#container")


const render = async () => {
    const jeansOwnershipHTML = ownsJeansFunc()
    const locationHTML = await locationChoices()
    const buttonHTML = await saveSubmission()
    const SubmissionListHTML = await SubmissionList()

    container.innerHTML = `${jeansOwnershipHTML} ${locationHTML} ${buttonHTML} ${SubmissionListHTML}`
}

document.addEventListener("newSubmissionCreated", render)

render()