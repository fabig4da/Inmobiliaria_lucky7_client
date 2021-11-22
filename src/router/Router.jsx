import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/home/Home"
import { CreateProperty } from "../pages/property/CreateProperty"
import { CreateUser } from "../pages/user/CreateUser"
import { navRoutes } from "../settings/var"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={navRoutes.regUser} element={<CreateUser />} />
            <Route path={navRoutes.regPropery} element={<CreateProperty />} />
        </Routes>
    )
}
