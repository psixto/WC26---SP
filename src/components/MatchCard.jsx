export function MatchCard({ match }) {
    return (
        <div className="match-card">
            <h3>{match.home_team} vs {match.away_team}</h3>
            <p>Date: {match.date}</p>
        </div>
    )
}