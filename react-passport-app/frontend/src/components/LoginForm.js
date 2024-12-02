import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ setView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            
            if (response.data.success) {
                alert('Login successful');
                setView('welcome');
            } else {
                alert('Invalid credentials');
            }
        } catch (error) {
            alert('Login failed: ' + error.response?.data?.message || 'Unknown error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
            </div>
            <div>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
