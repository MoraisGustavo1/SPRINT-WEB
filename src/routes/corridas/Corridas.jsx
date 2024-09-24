import './Corridas.css'
import SãoPaulo from '../../assets/SãoPaulo-cir.png'
import Mexico from '../../assets/Mexico-cir.png'
import ArabiaS from '../../assets/ArabiaS-cir.png'
import EUA from '../../assets/EUA-cir.png'
import Monaco from '../../assets/Monaco-cir.png'
import Tokyo from '../../assets/Tokyo-cir.png'
import Shanghai from '../../assets/Shanghai-cir.png'
import Polonia from '../../assets/polonoia-cir.png'
import Berlim from '../../assets/Berlin-cir.png'
import London from '../../assets/London-cir.png'

function Corridas (){
    return(
        <>
        <section className='Corridas'>
                <div className='TittleCorridas'><h1>Próximas Corridas</h1></div>
                <div className='CardCorridas'>
                    <div className='ProxCards'>
                        <img src={SãoPaulo} alt="" />
                        <h3>São Paulo, Brasil <br />07/12/24 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Mexico} alt="" />
                        <h3>México City, México <br />11/01/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={ArabiaS} alt="" />
                        <h3>Jeddah, Arabia Saudita <br />14/02/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={ArabiaS} alt="" />
                        <h3>Jeddah, Arabia Saudita <br />15/02/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={SãoPaulo} alt="" />
                        <h3>TBC <br />08/03/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={EUA} alt="" />
                        <h3>Miami, Estados Unidos <br />12/04/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Monaco} alt="" />
                        <h3>Monaco <br />03/05/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Monaco} alt="" />
                        <h3>Monaco <br />04/05/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Tokyo} alt="" />
                        <h3>Tokyo, Japão <br />17/05/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Tokyo} alt="" />
                        <h3>Tokyo, Japão <br />18/05/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Shanghai} alt="" />
                        <h3>Shanghai, China <br />31/05/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Shanghai} alt="" />
                        <h3>Shanghai, China <br />01/06/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Polonia} alt="" />
                        <h3>Jakarta, Polônia <br />21/06/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Berlim} alt="" />
                        <h3>Berlim, Alemanha <br />12/07/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={Berlim} alt="" />
                        <h3>Berlim, Alemanha <br />13/07/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={London} alt="" />
                        <h3>Londres, Reino Unido <br />26/07/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                    <div className='ProxCards'>
                        <img src={London} alt="" />
                        <h3>Londres, Reino Unido <br />27/07/25 </h3>
                        <button>Buy Tickets</button>
                    </div>
                </div>
        </section>
        </>
    )
}
export default Corridas