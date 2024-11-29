
import { BrowserRouter, Route, Routes,} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {


  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
