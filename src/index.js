import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import USERS from './users';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App users={USERS}/>
    </BrowserRouter>, 
    document.getElementById('root')
);
