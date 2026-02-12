import { useState, useEffect } from 'react'
import styles from './Leaderboard.module.css'
import data from '../example-data.json'
import { UserLeaderboardCard } from '../components/UserLeaderboardCard'

export function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        setLeaderboardData(data)
        console.log(data)
    }, [])

    return (
        <div className={styles.leaderboardContainer}>
            <h1>World Cup Leaderboard</h1>
            {
                leaderboardData.map((entry, index) => (
                    <UserLeaderboardCard key={index} user={entry} />
                ))
            }
        </div>
    )
}