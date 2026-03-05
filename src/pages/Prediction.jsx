import { useState } from "react"
import data from '../provisional-matches.json'
import { TournamentNavigation } from "../components/TournamentNavigation"

export function Prediction() {
    const [group, setGroup] = useState("Group A")

    return (
        <>
            <h1>Prediction Page</h1>
            <TournamentNavigation data={data} />
        </>
    )
}