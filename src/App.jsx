import {Routes, Route} from 'react-router-dom'


import Header from "./components/header"
import Footer from './components/Footer'

import Home from './pages/Home'

import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'


function App() {
	

	
  return (
    <>
      <Header />

			<main className="flex-1">
				<Routes>
					<Route path='/' element={<Home />} />
					
					<Route path='/contact' element={<Contact/>} />
					<Route path='/portfolio' element={<Portfolio/>} />
					<Route path='/resume' element={<Resume/>} />

				</Routes>
			</main>
			

			<Footer />
    </>
  )
}

export default App
