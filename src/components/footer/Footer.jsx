import './Footer.css'
import Simbolo from '../../assets/simbolo-e.png'
function Footer(){
    return(
    <>
    <div className="Footer">
        <div className='img-footer'>
            <img src={Simbolo} alt="" />
        </div>
        <div className='menu-footer'>
            <ul>
                <li>Link1</li>
                <li>Link2</li>
                <li>Link3</li>
                <li>Link4</li>
                <li>Link5</li>
            </ul>
            <ul>
                <li>X</li>
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Youtube</li>
                <li>Linkedin</li>
            </ul>
        </div>
        <div className='text-final'><h3 >@ Devin-2024</h3></div>
        
    </div>
    </>
    )
}
export default Footer