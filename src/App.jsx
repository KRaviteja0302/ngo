import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Causes from './pages/Causes'
import CauseDetails from './pages/CauseDetails'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Volunteer from './pages/Volunteer'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

export default function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/causes' element={<Causes />}/>
        <Route path='/cause/:id' element={<CauseDetails />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/volunteer' element={<Volunteer />}/>
        <Route path='/donate' element={<Donate />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}
