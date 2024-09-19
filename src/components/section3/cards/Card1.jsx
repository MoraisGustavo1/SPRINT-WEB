import Formulae from '../../../assets/FormulaE.png'
import './Cards.css'
function Card1 (){
    return(
        <>
        <section className='AllCards'>
                <div className="Cards">
                    <p>Solução 01</p>
                    <h3>Popularidade</h3>
                    <p className='paragrafo'>
                        Planejamos em construir uma plataforma de
                        streaming interativa para as corridas de Formula E, através desta plataforma, seremos capazes de atingir públicos abrangentes, desde de entusiastas de inovação até públicos diversos que apenas tenham interesse em conhecer mais sobre a Fórmula-E.
                    </p>
                </div>
                <div className="CardsImg">
                <img src={Formulae} alt="" />
                </div>
         </section>
        </>
    )
}
export default Card1