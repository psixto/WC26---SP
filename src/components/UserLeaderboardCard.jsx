import styles from './UserLeaderboardCard.module.css'

export function UserLeaderboardCard({ user }) {
    return (
        <div className={styles.userCard}>
                <h2>{user.username}</h2>
                <h3>{user.points}</h3>
        </div>
)}