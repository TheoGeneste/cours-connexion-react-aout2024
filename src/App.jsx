import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ConnexionPage from './Pages/ConnexionPage'
import InscriptionPage from './Pages/InscriptionPage'
import ComptePage from './Pages/ComptePage'
import NavBar from './Components/NavBar'
import AuthContext from './Contexts/AuthContext'
import { useState } from 'react'
import AuthService from './Services/AuthService'
import RouteSecu from './Components/RouteSecu'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isValid());
  const [user, setUser] = useState(AuthService.getUser());

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>  
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/connexion" element={<ConnexionPage />} />
            <Route path="/inscription" element={<InscriptionPage />} />
            <Route path="/compte" element={<RouteSecu><ComptePage /></RouteSecu>} />
          </Routes>
          {/* <Footer /> */}
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
