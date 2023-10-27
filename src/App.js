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
        <Movies />
      </main>
      <MyFooter />
    </div>
  )
}

export default App
