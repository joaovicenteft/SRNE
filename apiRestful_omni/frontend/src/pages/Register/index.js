import React, {useState} from 'react';
import './styles.css';
import api from '../../services/api';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from '../../assets/logo.svg'

export default function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {   
            const response = await api.post('/ongs', data);

            alert(`Seu ID retornado é: ${response.data.id}`);

            history.push('/');

        } catch (err) {
            console.log(err);
            alert('Erro nos parâmetros de cadastro');
        }
    }


    return (
       <div className="register-container">
           <div className="content">
               <section>
                   <img src={logoImg} alt="Be The Hero" />
                    <h1> Cadastro </h1>

                    <p>
                        Cadastre o um novo id de acordo com os
                        parâmetros
                    </p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
               </section>


            <form onSubmit={handleRegister}>
                <input
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="E-email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                />

                <div className="input-group">
                    <input
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <input
                        placeholder="UF"
                        style={{width: 80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                    />
                </div>

                <button className="button" type="submit">
                    Cadastrar
                </button>
            </form>
           </div>
       </div>
    );
}