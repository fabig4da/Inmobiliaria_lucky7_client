import React from 'react';
import { Link } from 'react-router-dom';
import { navRoutes } from '../settings/var';

export const SideBar = () => {
    return (
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
                    <Link to="/">
                        <i className='bx bx-home' ></i>
                        <span className="links_name">Home</span>
                    </Link>
                    <span className="tooltip">Home</span>
                </li>
                <li>
                    <Link to={navRoutes.regUser}>
                        <i className='bx bx-user' ></i>
                        <span className="links_name">Usuario</span>
                    </Link>
                    <span className="tooltip">Usuario</span>
                </li>
                <li>
                    <Link to={navRoutes.regPropery}>
                        <i className='bx bx-building-house' ></i>
                        <span className="links_name">Inmueble</span>
                    </Link>
                    <span className="tooltip">Inmueble</span>
                </li>
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
            </ul>
            <div className="profile_content">
                <div className="profile">
                    <div className="profile_details">
                        <img src="./images/profile1.jpg" alt="profile " />
                        <div className="name_job">
                            <div className="name">Elías T.</div>
                            <div className="job">Web Developer</div>
                        </div>
                    </div>
                    <i className='bx bx-log-out' id="log_out"></i>
                </div>
            </div>
        </div>
    )
}
