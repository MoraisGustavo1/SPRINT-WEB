import './Footer.css'
import Simbolo from '../../assets/simbolo-e.png'
import { Link } from 'react-router-dom'
function Footer(){
    return(
    <>
    <div className="Footer">
        <div className='img-footer'>
            <img src={Simbolo} alt="" />
        </div>
        <div className='menu-footer'>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/contato">CONTATO</Link></li>
                <li><Link to="/corridas">CORRIDAS</Link></li>
                <li><Link to="/login">LOGIN</Link></li>
            </ul>
            <ul>
                <li>X</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedin</li>
            </ul>
        </div>
        <div className='text-final'><h3 >@ Devin-2024</h3></div>
        
    </div>
    </>
    )
}
export default Footer