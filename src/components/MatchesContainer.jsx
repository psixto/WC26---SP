import { MatchCard } from './MatchCard.jsx'

export function MatchesContainer({ matches }) {
    return (
        <div className="matches-container">
            {matches.map(match => (
                <MatchCard key={match.match_nro} match={match} />
            ))}
        </div>
    )
}