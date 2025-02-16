import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import FaShoppingCart from '../FaShoppingCart/FaShoppingCart';

function Navbar() {
    return (
        <header>
            <nav className="nav-bar">
                <p>Logo</p>
                <ul className="nav-bar-options">
                    <li className="nav-bar-item">INICIO</li>
                    <li className="nav-bar-item">PRODUCTOS</li>
                    <li className="nav-bar-item">CONTACTO</li>
                </ul>
                <CartWidget />
                <FaShoppingCart />
            </nav>
        </header>
    );
};

export default Navbar;