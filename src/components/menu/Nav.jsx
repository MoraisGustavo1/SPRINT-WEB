import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    // Alterna o estado de exibição do menu
    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    }

    // Fecha o menu
    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <>
            <nav className='Menu'>
                <button onClick={toggleMenu}>Menu</button>
                {showMenu && ( // Exibe o menu apenas se showMenu for verdadeiro
                    <ul className="menu-card">
                        <li><Link to="/section1">Link 1</Link></li>
                        <li><Link to="/section2">Link 2</Link></li>
                        <li><Link to="/section3">Link 3</Link></li>
                        <li><Link to="/section4">Link 4</Link></li>
                        <li><Link to="/section5">Link 5</Link></li>
                        {/* Botão para fechar o menu */}
                        <button onClick={closeMenu} className="close-menu">Fechar</button>
                    </ul>
                )}
            </nav>
        </>
    );
}

export default Nav;
