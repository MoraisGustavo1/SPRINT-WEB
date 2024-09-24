import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Linkedin from '../../assets/linkedin-icone.png';
import TT from '../../assets/tt-icone.png';
import Face from '../../assets/face-icone.png';
import You from '../../assets/youtube-icone.png';
import X from '../../assets/x.png';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [closing, setClosing] = useState(false);

    const toggleMenu = () => {
        if (menuVisible) {
            setClosing(true);
            setTimeout(() => {
                setShowMenu(false);
                setClosing(false);
                setMenuVisible(false);
            }, 300);
        } else {
            setShowMenu(true);
            setTimeout(() => {
                setMenuVisible(true);
            }, 30); 
        }
    };

    return (
        <>
            <nav className='Menu'>
                <button onClick={toggleMenu} className='open-menu'>Menu</button>
                {showMenu && (
                    <div className={`menu-card ${menuVisible ? 'show' : ''} ${closing ? 'hide' : ''}`}>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/contato">CONTATO</Link></li>
                            <li><Link to="/corridas">CORRIDAS</Link></li>
                            <li><Link to="/section4">Link 4</Link></li>
                            <li><Link to="/section5">Link 5</Link></li>
                        </ul>
                        <div className='redes'>
                            <img src={Linkedin} alt="LinkedIn" />
                            <img src={TT} alt="Twitter" />
                            <img src={Face} alt="Facebook" />
                            <img src={You} alt="YouTube" />
                        </div>
                        <button onClick={toggleMenu} className="close-menu">
                            <img src={X} alt="Fechar" />
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Nav;
