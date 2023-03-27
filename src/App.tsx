// import { useState } from 'react'
import './App.scss'
import AppContainer from './components/AppContainer'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import { FirebaseProvider } from './context/FirebaseContext'


function App() {

  return (
  <FirebaseProvider>
    {/* <Login /> */}
    <div className="App">
      {/* <Login /> */}
			<Header />
			<AppContainer />
			<Footer />
		</div>
  </FirebaseProvider>
  )
}

export default App
