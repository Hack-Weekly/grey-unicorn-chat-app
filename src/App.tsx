// import { useState } from 'react'
import './App.scss'
import AppContainer from './components/AppContainer'
import Footer from './components/Footer'
import Header from './components/Header'
import { FirebaseProvider } from './context/FirebaseContext'


function App() {
  // const [count, setCount] = useState(0)
  return (
  <FirebaseProvider>
    <div className="App">
			<Header />
			<AppContainer />
			<Footer />
		</div>
  </FirebaseProvider>
  )
}

export default App
