import './Section2.css';
import CardCarro from '../../assets/CardCarro.png';

function Section2() {
    return (
        <div className="container2">
            <div className="text-section">
                <h1>O que é a Formula-E?</h1>
                <p>
                    Fórmula E é mais do que apenas uma série de corridas - é uma batalha pelo futuro.
                    Nossos carros radicais - todos movidos à eletricidade - abrem caminho para os carros de rua de amanhã.
                </p>
            </div>
            <div className="image-section">
                <img src={CardCarro} alt="Carro de Fórmula E" />
            </div>
        </div>
    );
}

export default Section2;
