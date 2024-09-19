import { Outlet } from 'react-router-dom'
import './Section3.css'
import Card1 from './cards/Card1'
import Card2 from './cards/Card2'
import Card3 from './cards/Card3'
function Section3 () {
    return(
        <>
        <div className="Container3">
            <div className='Fundo'>
                
                    <h3>Nossos desafios e Soluções</h3>
                    <p>A Fórmula E enfrenta desafios significativos para se destacar no mercado saturado de esportes automobilísticos. Apesar de seu foco em sustentabilidade, educação e inovação, a categoria não atinge o nível desejado de popularidade e engajamento. O público-alvo, especialmente os jovens e entusiastas de tecnologia, busca experiências mais interativas e imersivas.</p>
            
            </div>
        </div>
        <Outlet/>
        <Card1/>
        <Card2/>
        <Card3/>


        </>
    )
}
export default Section3