import styles from './Matches.module.css'
import { useEffect, useState } from 'react'

function TeamDisplay({ flagSrc, teamName, score }) {
	const [flag, setFlag] = useState(null)
	
	useEffect(() => {
		//TODO
	}, [flagSrc])
	
	return (
		<div>
			<img src={flag} alt={`Bandera de ${teamName}`} />
			<span>{teamName}</span>
		</div>
		)
}

export function MatchCard({ match }) {
  const { 
    home_team, 
    away_team, 
    date,
  } = match;

  return (
    <article className={styles.matchCard}>

      <section className={styles.matchInfo}>
        <TeamDisplay 
          flagSrc={match.home_team.flag} 
          teamName={match.home_team} 
        />

        <div>
          <span>{match.home_team.score}</span>
          <span>:</span>
          <span>{match.away_team.score}</span>
        </div>

        <TeamDisplay 
          flagSrc={match.away_team.flag} 
          teamName={match.away_team.name} 
        />
      </section>

      {/* Footer: Detalles de tiempo y lugar */}
      <footer>
        <div>
          <time>{match.date}</time>
        </div>
      </footer>
    </article>
  );
};

export default MatchCard;