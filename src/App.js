import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import UpperBar from './components/UpperBar'
import Movies from './components/Movies'

function App() {
  return (
    <div data-bs-theme="dark">
      <header>
        <MyNavbar />
      </header>
      <main>
        <UpperBar />
        <Movies
          saga="The Lord of the Rings"
          movieTitle="the%20lord%20of%20the%20rings"
        />
        <Movies saga="Doctor Who" movieTitle="doctor%20who" />
        <Movies saga="Marvel Cinematic Universe" movieTitle="marvel" />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
