import React from 'react';
import './styles.css';

import {
    Link,
    useHistory
} from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import HeroesImg from '../../assets/heroes.png';
import LogoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className='logon'>
            <section className="form">
                <img src={LogoImg} alt="ApiRestful"/>

                <form>
                    <h1> Faça seu logon </h1>

                    <input
                        placeholder="Your ID"
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