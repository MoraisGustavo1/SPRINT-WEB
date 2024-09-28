import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import Logo from '../../assets/logo.png'
import Carro from '../../assets/Carro.png'
import './CadUsuarios.css'

function CadUsuarios (){
    let {id} =useParams();

    const [usuarios,setUsuarios]= useState({
        id,
        usuario:'',
        senha:''
     });

     const navigate = useNavigate();

     const handleChange=(e)=>{
        setUsuarios({...usuarios,[e.target.name]: e.target.value});
     }

     let metodo = "post";
     if(id){
        metodo = 'put'
     }

     const handleSubmit=(e)=>{
        
        e.preventDefault();
        fetch(`http://localhost:5000/usuarios/${id ? id :''}`,{
            method:metodo,
            headers: {
                'Content-type':'application/json',
            },
            
            body:JSON.stringify(usuarios),
            
        }).then(()=>{
            alert('Cadastrado com sucesso!')
        })
     }
     useEffect(()=>{
        if(id){
            fetch(`http://localhost:5000/usuarios/${id}`)
            .then((resp)=>{
                return resp.json();
            })
            .then((data)=>{
                setUsuarios(data);
            })
        }
     },[])



    return(
        <section className="Tudo">
            <div className="hlogo"><img src={Logo} /></div>
            <section className="Cadastro">
                
                <div className="Card-Cadastro">
                    <h1>Cadastro de usuários</h1>
                    <form className="FormCad"  onSubmit={handleSubmit}>

                    <div className="w-input">
                        <input
                            type="text"
                            name="usuario"
                            value={usuarios.usuario}
                            placeholder="Digite seu Usuário"
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleChange}
                        />
                    </div>

                    <div className="w-input">
                        <input
                            type="password"
                            name="senha"
                            value={usuarios.senha}
                            placeholder="Digite sua senha"
                            /* o onChange é utili em situações que é necessários reagir a cada alteração do input */
                            onChange={handleChange}
                        />
                    </div>
                        <div className="uteis">
                            <button className="login-form-btn" type="submit">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}
export default CadUsuarios