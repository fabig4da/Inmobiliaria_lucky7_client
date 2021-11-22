import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import {useEffect} from 'react';
import { Header } from './componets/header/Header';
import { Router } from './router/Router';
// import { userServices } from './services/user';

function App() {

    return (
        <BrowserRouter >
            <Header />
            <Router />

        </BrowserRouter>
    );
}

export default App;