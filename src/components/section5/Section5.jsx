import './Section5.css'
import Corridas from '../../routes/corridas/Corridas.jsx'
import { Link } from 'react-router-dom'
function Section5 (){
    return(
        <>
        <section className="race-section">
            <div className='tittle'><h3>Proximas corridas</h3></div>
            <div className="card card-1">
                <div className="card-text">
                    <h2>01</h2>
                    <p>São Paulo, Brasil</p>
                </div>
                </div>
                <div className="card card-2">
                <div className="card-text">
                    <h2>03</h2>
                    <p>Jeddah, Arabia Saudita</p>
                </div>
                </div>
                <div className="card card-3">
                <div className="card-text">
                    <h2>04</h2>
                    <p>Jeddah, Arabia Saudita</p>
                </div>
                </div>
                <div className="card card-4">
                <div className="card-text">
                    <h2>02</h2>
                    <p>México City, México</p>
                </div>
                </div>

                <div className="button-container">
                <div className="button"><Link to='./corridas'><p>Ver Calendário</p></Link></div>
            </div>
        </section>
        </>
    )
}
export default Section5