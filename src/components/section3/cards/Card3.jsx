import Engajamento from '../../../assets/egajamento.png'
import './Cards.css'
function Card3 (){
    return(
        <section className='AllCards'>
        <div className="Cards">
            <p>Solução 03</p>
            <h3>Visibilidade</h3>
            <p className='paragrafo'>
                Através da plataforma e do serviço de streaming, seremos capazes de levar a Formula E de forma divertida e inovadora para o público geral e para aqueles que já consomem ou que já são familiarizados com o assunto.
                A promoção de ambos acontecerá através de anúncios e publicidades através de redes sociais e outros canais de mídia
            </p>
        </div>
        <div className="CardsImg">
            <img src={Engajamento} alt="" />
        </div>
        </section>
    )
}
export default Card3