import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import { Leaderboard } from './pages/Leaderboard.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { Prediction } from './pages/Prediction.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'

function App() {

  return (
      <>
        <Header  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderBoard" element={<Leaderboard />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/prediction" element={
            <ProtectedRoute>
              <Prediction />
            </ProtectedRoute>
          } />
        </Routes>
      </>
  )
}

export default App
