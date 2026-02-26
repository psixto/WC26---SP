import styles from './Matches.module.css'
import { useEffect, useState } from 'react'
import countryCodes from '../countries.json'

function TeamDisplay({ teamName, score }) {
  const [flagCode, setFlagCode] = useState('xx')
  
	useEffect(() => {
    const code = countryCodes[teamName]
    if (code) {
      setFlagCode(code)
    } else {
      console.warn(`No se encontró el código de país para ${teamName}`)
    }
  }, [teamName])
	
	console.log(`Mostrando bandera para ${teamName} con código ${flagCode}`)

	return (
		<div>
			<img src={`https://flagcdn.com/16x12/${flagCode}.png`}
					srcset={`https://flagcdn.com/32x24/${flagCode}.png 2x,
						https://flagcdn.com/48x36/${flagCode}.png 3x`}
					width="16"
					height="12" 
					alt={`Bandera de ${teamName}`}/>
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
          teamName={match.home_team} 
        />

        <div>
          <span>{match.home_team.score}</span>
          <span>:</span>
          <span>{match.away_team.score}</span>
        </div>

        <TeamDisplay 
          teamName={match.away_team} 
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