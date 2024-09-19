import Formula from '../../../assets/Fórmula.png'
import './Cards.css'
function Card2 (){
    return(
     <section className='AllCards'>
        <div className="Cards">
            <p>Solução 02</p>
            <h3>Engajamento Limitado</h3>
            <p className='paragrafo'>
            Dentro da nossa plataforma digital, forneceremos materiais focados educativos com o intuito de promover as corridas de Formula E, além de educar os visitantes sobre sustentabilidade, tecnologia e inovação. A plataforma conta com quizzes e jogos interativos, para um experiencia divertida e imersiva para os usuários.
            </p>
        </div>
        <div className="CardsImg">
            <img src={Formula} alt="" />
        </div>
        </section>
    )
}
export default Card2