import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { CreateProperty } from "../pages/property/CreateProperty"
import { CreateUser } from "../pages/user/CreateUser"
import { navRoutes } from "../settings/var"
import { Mision } from './../pages/mision/Mision';
import { Vision } from './../pages/vision/Vision';
import { Contato } from './../pages/contato/Contato';
import { Login } from "../pages/login/Login"
import { MainProperty } from "../pages/property/MainProperty"
import { UserMain } from './../pages/user/UserMain';

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={navRoutes.regUser} element={<CreateUser />} />
            <Route path={navRoutes.regPropery} element={<CreateProperty />} />
            <Route path={navRoutes.mision} element={<Mision />} />
            <Route path={navRoutes.vision} element={<Vision />} />
            <Route path={navRoutes.contacto} element={<Contato />} />
            <Route path={navRoutes.aLogin} element={<Login />} />
            <Route path={navRoutes.properties} element={<MainProperty />} />
            <Route path={navRoutes.users} element={<UserMain />} />
        </Routes>
    )
}
