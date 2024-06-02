import './App.css'
import NavBar from './components/NavBar'
import { AppRouter } from './routes/AppRouter'

function App() {
  return (
    <AppRouter>
      <NavBar />
    </AppRouter>
  )
}

export default App
