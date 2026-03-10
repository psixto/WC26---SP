import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const LeaderboardPage = lazy(() => import('./pages/Leaderboard.jsx'))
const NotFound = lazy(() => import('./pages/NotFoundPage.jsx'))
const PredictionPage = lazy(() => import('./pages/Prediction.jsx'))
const LoginPage = lazy(() => import('./pages/Login.jsx'))

function App() {

  return (
      <>
        <Header  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/prediction" element={
              <PredictionPage />
          } />
        </Routes>
      </>
  )
}

export default App
