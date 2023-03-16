// import { useState } from 'react'
import './App.scss'
import AppContainer from './components/AppContainer'

import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
			<Header />

			<AppContainer />

			<Footer />
		</div>
  )
}

export default App
