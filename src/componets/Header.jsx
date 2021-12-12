import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { navRoutes } from '../settings/var';

export const Header = () => {
    const state = useSelector(state => state.authReducer);
    useEffect(() => {
        console.log(state);
    }, [])
    return (
        <header>
            <nav>
                <h1 className="titulo">Bienvenido a la Inmobiliaria XYZ</h1><br />
                <div className="sidebar">
                    <div className="logo_content">
                        <div className="logo">
                            <image src="https://uploads-ssl.webflow.com/58646eab48ddaea33e981106/58da9320e4118aa50b528c26_WhiteLogo.png" width="30px" height="20px" />
                            <div className="logo_name">Ltda.</div>
                        </div>
                        <i className='bx bx-menu' id='btn'></i>
                    </div>
                    <ul className="nav_list">
                        <li>
                            <Link to={navRoutes.home}>
                                <i className='bx bx-home' ></i>
                                <span className="links_name">Home</span>
                            </Link>
                            <span className="tooltip">Home</span>
                        </li>
                        {state.logged &&
                            <>
                                <li>
                                    <Link to={navRoutes.users}>
                                        <i className='bx bx-user' ></i>
                                        <span className="links_name">Usuario</span>
                                    </Link>
                                    <span className="tooltip">Usuario</span>
                                </li>
                                <li>
                                    <Link to={navRoutes.properties}>
                                        <i className='bx bx-building-house' ></i>
                                        <span className="links_name">Inmuebles</span>
                                    </Link>
                                    <span className="tooltip">Inmuebles</span>
                                </li>
                            </>
                        }
                        <li>
                            <Link to={navRoutes.mision}>
                                <i className='bx bx-flag' ></i>
                                <span className="links_name">Misión</span>
                            </Link>
                            <span className="tooltip">Misión</span>
                        </li>
                        <li>
                            <Link to={navRoutes.vision}>
                                <i className='bx bx-target-lock' ></i>
                                <span className="links_name">Visión</span>
                            </Link>
                            <span className="tooltip">Visión</span>
                        </li>
                        <li>
                            <Link to={navRoutes.contacto}>
                                <i className='bx bxs-contact' ></i>
                                <span className="links_name">Contacto</span>
                            </Link>
                            <span className="tooltip">Contacto</span>
                        </li>
                        {!state.logged &&
                            <li>
                                <Link to={navRoutes.aLogin}>
                                    <i className='bx bxs-arrow-to-right' ></i>
                                    <span className="links_name">Sign In</span>
                                </Link>
                                <span className="tooltip">Sing In</span>
                            </li>
                        }
                    </ul>
                    {state.logged &&
                        <div className="profile_content">
                            <div className="profile">
                                <div className="profile_details">
                                    <img src={'https://inmobiliaria-lucky7.herokuapp.com/image/name'} alt="profile " />
                                    <div className="name_job">
                                        <div className="name">{`${state.data.user.name} ${state.data.user.lastname}`}</div>
                                        <div className="job">{state.data.user.rol}</div>
                                    </div>
                                </div>
                                <i className='bx bx-log-out' id="log_out"></i>
                            </div>
                        </div>
                    }
                </div>
            </nav>

        </header>
    )
}
