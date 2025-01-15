import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ConnexionPage from './Pages/ConnexionPage'
import InscriptionPage from './Pages/InscriptionPage'
import ComptePage from './Pages/ComptePage'
import NavBar from './Components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/inscription" element={<InscriptionPage />} />
          <Route path="/compte" element={<ComptePage />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
