import styles from './UserLeaderboardCard.module.css'

export function UserLeaderboardCard({ user }) {
    return (
        <div className={styles.userCard}>
            <div className={styles.userInfo}>
                <span>{user.username}</span>
                <span>{user.points}</span>
            </div>
        </div>
)}