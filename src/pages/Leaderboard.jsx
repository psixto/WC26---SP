import { useState, useEffect } from 'react'
import styles from './Leaderboard.module.css'
import data from '../example-data.json'
import { UserLeaderboardCard } from '../components/UserLeaderboardCard'
import { PodiumStep } from '../components/PodiumStep'

export default function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([])

    useEffect(() => {
        const sortedData = [...data].sort((a, b) => b.points - a.points)
        setLeaderboardData(sortedData)
    }, [])

    const topThree = leaderboardData.slice(0, 3)
    const theRest = leaderboardData.slice(3)

    return (
        <div className={styles.leaderboardContainer}>
            <h1>World Cup Leaderboard</h1>

            <div className={styles.podiumContainer}>
                {topThree[1] && <PodiumStep user={topThree[1]} rank={2} />}
                {topThree[0] && <PodiumStep user={topThree[0]} rank={1} />}
                {topThree[2] && <PodiumStep user={topThree[2]} rank={3} />}
            </div>

            <div className={styles.listContainer}>
                {theRest.map((entry, index) => (
                    <UserLeaderboardCard key={index} user={entry} />
                ))}
            </div>
        </div>
    )
}