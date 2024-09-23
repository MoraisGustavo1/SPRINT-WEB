import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contato from './routes/contato/Contato.jsx'
import Section2 from './components/section2/Section2.jsx'
import Section3 from './components/section3/Section3.jsx'
import Section4 from './components/section4/Section4.jsx'
import Section5 from './components/section5/Section5.jsx'
import Home from './components/home/Home.jsx'


const router =createBrowserRouter([{
  path:'/',element:<App/>,
  children:[
    {path:'/',element:<Home/>},
    {path:'/contato',element:<Contato/>},
    {path:'/section2',element:<Section2/>},
    {path:'/section3',element:<Section3/>},
    {path:'/section4',element:<Section4/>},
    {path:'/section5',element:<Section5/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*CRIANDO O DESESTRUCT ROUTER PARA SER RENDERIZADO */}
    <RouterProvider router={router} />
  </StrictMode>,
)
