import '../navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return <nav className="nav">
        <a href="/" className="site-title">DGG</a>
        <ul>
            <li>
                <Link to="/dogs">Dogs</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </nav>
}
export default Navbar;