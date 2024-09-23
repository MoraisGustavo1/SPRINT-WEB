import { Outlet } from 'react-router-dom'
import  Nav from './components/menu/Nav.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {
  

  return (
    <>
     <Nav/>
     <Outlet/>     
     <Footer/>
    </>
  )
}

export default App
