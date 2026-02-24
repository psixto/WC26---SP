import { useState } from "react"
import { MatchesContainer } from "../components/MatchesContainer"
import data from '../provisional-matches.json'

export function Prediction() {
    const [group, setGroup] = useState("Group A")

    return (
        <>
            <h1>Prediction Page</h1>
            {
                Object.entries(data.matches).map(([groupName, groupMatches]) => (
                <div key={groupName}>
                    <h2>{groupName}</h2>
                    <MatchesContainer key={groupName} matches={groupMatches} />
                </div>
            ))
            }
        </>
    )
}