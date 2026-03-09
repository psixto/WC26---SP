import { createContext, useState, useContext } from "react"
import { useRouter } from "../hooks/useRouter"

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { navigateTo } = useRouter()

    const handleLogin = () => {
        isLoggedIn ? handleLogout() : navigateTo("./Login")
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    } else {
        return context
    }
}
