import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './css/forms_styles.css';
import './css/menu_style.css';
import './css/styles.css';
import './css/table_styles.css';
import './css/login_styles.css';
// import {useEffect} from 'react';
// import { Header } from './componets/header/Header';
import { Router } from './router/Router';
// import { userServices } from './services/user';
// import { SideBar } from './componets/SideBar';
import { Header } from './componets/Header';
import { Footer } from './componets/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter >
                <Header />
                <main>
                    <Router />
                </main>
                <Footer />

            </BrowserRouter>
        </Provider>
    );
}

export default App;