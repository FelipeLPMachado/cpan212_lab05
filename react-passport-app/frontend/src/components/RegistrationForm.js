import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = ({ setView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', 
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            if (response.status === 201) {
                alert('Registration successful');
                setView('login');
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (error) {
            setError('Registration failed. Please try again.');
            console.error('Error during registration:', error.response ? error.response.data : error.message);
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
            <button type="submit">Register</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default RegistrationForm;
