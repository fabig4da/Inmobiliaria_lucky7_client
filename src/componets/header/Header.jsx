import React from 'react'
import {Link} from 'react-router-dom'
import { navRoutes } from '../../settings/var';
// import { userServices } from './../../services/user';

export const Header = () => {
    React.useEffect(() => {
        // userServices.getMany().then(data=>console.log(data));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand">Inmoviliaria lucky7</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <Link to={navRoutes.regUser} class="nav-link active" aria-current="page">Registrarse</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={navRoutes.regPropery} class="nav-link active" aria-current="page">Registrar inmueble</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/" class="nav-link">Link</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link to="/" class="nav-link dropdown-toggle" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li><Link to="/" class="dropdown-item">Action</Link></li>
                                    <li><Link to="/" class="dropdown-item">Another action</Link></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><Link to="/" class="dropdown-item">Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}

