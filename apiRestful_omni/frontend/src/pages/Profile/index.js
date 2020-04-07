import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from '../../services';
import "./styles.css";


export default function Profile() {


    return (
        <div className='profile-container'>
            <header>
                <img src={logoImg} alt='Be the hero' />
                <span>  Bem vinda, {ongName} </span>

                <Link to="/incidents/new" className='button'>
                    Cadastrar novo caso
                </Link>

            <button type="button">
                <FiPower size={18} color='#e02041'/>
            </button>
            </header>
        </div>

    
    );

}