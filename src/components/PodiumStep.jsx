import styles from '../pages/Leaderboard.module.css'

export function PodiumStep({ user, rank }) {
    return (
        <div className={`${styles.podiumStep} ${styles[`rank${rank}`]}`}>
            <div className={styles.avatarCircle}>{rank}</div>
            <span className={styles.name}>{user.username}</span>
            <span className={styles.points}>{user.points} pts</span>
        </div>
    )
}