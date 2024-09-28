import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contato from './routes/contato/Contato.jsx'
import Section3 from './components/section3/Section3.jsx'
import Home from './components/home/Home.jsx'
import Corridas from './routes/corridas/Corridas.jsx'
import CadUsuarios from './routes/CadUsuarios/CadUsuarios.jsx'
import Login from './routes/login/Login.jsx'


const router =createBrowserRouter([{
  path:'/',element:<App/>,
  children:[
    {path:'/',element:<Home/>},
    {path:'/contato',element:<Contato/>},
    {path:'/corridas',element:<Corridas/>},
    {path:'/section3',element:<Section3/>},
    {path:'/login',element:<Login/>},
    {path:'/cadastro',element:<CadUsuarios/>}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*CRIANDO O DESESTRUCT ROUTER PARA SER RENDERIZADO */}
    <RouterProvider router={router} />
  </StrictMode>,
)
