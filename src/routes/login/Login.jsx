import { useRef, useState, useEffect} from "react"
import {useNavigate, Link} from 'react-router-dom'
import './Login.css'
import Logo from '../../assets/logo.png'

function Login (){

    const usuario = useRef();
    const senha = useRef();

    const [usuarios, setUsuarios]=useState([])

    const navigate = useNavigate();

    function validar(){
        for( let  i=0; i <usuarios.length;i++){
            if(
                usuarios[i].usuario == usuario.current.value &&
                usuarios[i].senha ==senha.current.value
            )
            return true
        }
    }

    const handleSubmit=(e)=>{
        //previne que sua pagina faça qualquer modificação ex. load
        e.preventDefault();
        if(validar()){
            //criando a autenticação
            let token=
                Math.random().toString(16).substring(2)+
                Math.random().toString(16).substring(2)
                sessionStorage.setItem("usuario",usuario.current.value);
                sessionStorage.setItem("senha", token);
                navigate("/");
        } else{
            alert("usuario/senha inválidos")
        }
    }

    useEffect(()=>{
        //pega o link da url
        fetch("http://localhost:5000/usuarios")
        //promise
        .then((res)=>{
            //converte os dados para json
            return res.json();
        })
        .then((res)=>{
            //recebe as alterações da variavel
            setUsuarios(res)
        })
        //retrona um array vazio
    },[])








    return(
        <section className="Tudo">
        <div className="hlogo"><img src={Logo} /></div>
        <section className="Login">
            
            <div className="CardLogin">
                <h1>Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <span className="titulo-login">Faça seu Login</span>

                    <div className="w-input">
                            <input
                                type="text"
                                className="input-form"
                                id="usuario"
                                ref={usuario}
                                placeholder="usuario"                 
                            />
                    </div>


                    <div className="w-input">
                            <input
                                type="password"
                                className="input-form"
                                id="senha"
                                ref={senha}
                                placeholder="senha"                 
                            />
                    </div>

                    <div className="login-btn">
                        <button type="submit" className="login-form-btn">Login</button>

                    </div>


                    <ul className="uteis">
                        <li>
                           <Link to="/cadastro">
                            Criar usuario
                           </Link>
                        </li>

                    </ul>

                </form>
            </div>
        </section>

        </section>
    )
}
export default Login