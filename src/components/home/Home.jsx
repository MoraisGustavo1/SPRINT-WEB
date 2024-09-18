import Section1 from "../section1/Section1"
import Section2 from "../section2/Section2"
import Section3 from "../section3/Section3"
import Section4 from "../section4/Section4"
import Section5 from "../section5/Section5"
import './Home.css'
function Home (){
    return(
        <>
        <div className="Home">
            <Section1/>
            <br />
            <Section2/>
            <br />
            <Section3/>
            <br />
            <Section4/>
            <br />
            <Section5/>
        </div>
        </>
    )
}
export default Home