import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Welcome from './components/Welcome';

const App = () => {
    const [view, setView] = useState('register');

    return (
        <div>
            {view === 'login' && <LoginForm setView={setView} />}
            {view === 'register' && <RegistrationForm setView={setView} />}
            {view === 'welcome' && <Welcome />}
        </div>
    );
};

export default App;
