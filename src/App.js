import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvShows from './components/TvShows'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div data-bs-theme="dark">
        <header>
          <MyNavbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TvShows />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
