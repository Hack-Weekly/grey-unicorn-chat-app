import './App.scss'
import AppContainer from './components/AppContainer'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FirebaseProvider } from './context/FirebaseContext'


function App() {

  return (
  <FirebaseProvider>
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={ <Login />} />
        <Route path='/chat' element={ <AppContainer />} />
      </Routes>
		</div>
    </Router>
  </FirebaseProvider>
  )
}

export default App
