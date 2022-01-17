import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./context/auth-context";

ReactDOM.render(
    <AuthContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthContextProvider>,
    document.getElementById('root')
);


