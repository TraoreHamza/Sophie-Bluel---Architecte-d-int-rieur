import React from 'react';
import { Link } from 'react-router';
import {useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import './login.css'
const Login = () => {
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const Navigate = useNavigate();

        const fetchLogin = async (e) => {
                e.preventDefault();

        try {
            const response = await fetch('http://localhost:5678/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email, password}),
            });
            if (!response.ok) {
                throw new Error('Email ou le mot de passe incorrects');
            }
             
            const token = data.token;
            
            localStorage.setItem('token', token);
            localStorage.getItem('token');

            Navigate("/");

        } catch (err) {
                console.log(err.message);
            }
        };
    return (
        <>
        <main className='main__container'>
            <h1>Log in</h1> 
            <form action='#' className='form' onSubmit={fetchLogin}>
                {/* // EMAIL */}
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" placeholder='Entrez votre mail' value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
                {/* //PASSWORD */}
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" placeholder='Entrez votre mot de passe' value={password} id="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type='submit'>Se connecter</button>
                <a href="" className='link'>Mot de passe oublié</a>
            </form>
        </main>
        </>
    );
};

export default Login;