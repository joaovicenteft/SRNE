import React, { useState } from 'react';
import './styles.css';

import {
    Link,
    useHistory
} from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';
import api from '../../services/api'

export default function Logon() {
    const [id, setId] = useState("");

    const history = useHistory();
    
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("/sessions", {id})
            localStorage.setItem("ongId", id);
            localStorage.setItem("ongName", response.data.name);

            history.push("/profile");
        } catch (err) {
            console.log(err);
            alert("error in login");
        }

    }

    return (
        <div className='logon'>
            <section className="form">
                <img src={LogoImg} alt="ApiRestful"/>

                <form onSubmit={handleLogin}>
                    <h1> Faça seu logon </h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">
                     Entrar 
                    </button> 

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#e02041" />
                        Não possuo cadastro
                    </Link> 
                </form>
            </section>
            <img src={HeroesImg} alt="Heroes" />
        </div>
    );
}