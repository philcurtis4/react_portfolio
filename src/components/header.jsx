import {NavLink} from 'react-router-dom'

function Header () {
	return (
		<>
			<header className="row justify-between">
				<h3>Phil Curtis</h3>

				<nav>
					
					<NavLink to="/">About Me</NavLink>
					<NavLink to="/portfolio">Portfolio</NavLink>
					<NavLink to="/contact">Contact</NavLink>
					<NavLink to="/resume">Resume</NavLink>
				</nav>
			</header>
		</>
	)
}

export default Header