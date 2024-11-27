import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="nav-container">
        <nav className="navbar">
          <Link to='/'>
            <h1 className="navbar-logo">Negocio.</h1>
          </Link>
          <Link to='/Cart'>  
            <h2 className="navbar-cart">🛒</h2> 
            </Link>
        </nav>
    </div>
  )
}

export default Navbar
