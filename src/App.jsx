import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './css/forms_styles.css';
import './css/menu_style.css';
import './css/styles.css';
// import {useEffect} from 'react';
// import { Header } from './componets/header/Header';
import { Router } from './router/Router';
// import { userServices } from './services/user';
import { SideBar } from './componets/SideBar';

function App() {

    return (
        <BrowserRouter >
            <SideBar />
            <Router />

        </BrowserRouter>
    );
}

export default App;