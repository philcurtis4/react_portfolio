import {NavLink} from 'react-router-dom'

function Header () {
	return (
		<>
			<header className="row justify-between">
				<h3>Logo</h3>

				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/about">About</NavLink>
					<NavLink to="/contact">Contact</NavLink>
				</nav>
			</header>
		</>
	)
}

export default Header