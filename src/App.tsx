// import { useState } from 'react'
import './App.scss'
import AppContainer from './components/AppContainer'
import Footer from './components/Footer'
import Header from './components/Header'
import { AuthProvider } from './context/AuthContext'


function App() {
  // const [count, setCount] = useState(0)
  return (
  <AuthProvider>
    <div className="App">
			<Header />
			<AppContainer />
			<Footer />
		</div>
  </AuthProvider>
  )
}

export default App
