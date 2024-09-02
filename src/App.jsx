import {Routes, Route} from 'react-router-dom'


import Header from "./components/header"
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


function App() {
	

	
  return (
    <>
      <Header />

			<main className="flex-1">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact/>} />
				</Routes>
			</main>
			

			<Footer />
    </>
  )
}

export default App
