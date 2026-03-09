import styles from './Login.module.css'
import { useAuth } from '../context/AuthContext.jsx'

export function Login() {
    const { setIsLoggedIn } = useAuth()
    
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginCard}>
                <div className={styles.formGroup}>
                    <label htmlFor="username">Username</label>
                    <input className={styles.inputField} type="text" id="username" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input className={styles.inputField} type="password" id="password" />
                </div>
                <button type="submit" 
                className={styles.loginButton}
                onClick={ () => setIsLoggedIn(true) }>
                    Login</button>
            </form>
        </div>
    )
}