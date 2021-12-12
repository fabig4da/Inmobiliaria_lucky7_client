import React from 'react'
import { Link } from 'react-router-dom'
import { navRoutes } from '../../settings/var'

export const UserMain = () => {
    return (
        <div>
            <section class="sectionTable">
                <h4>Tabla de usuarios registrados</h4>
                <hr />
                    <br />
                    <table>
                        <caption>Listado de usuarios</caption>
                        <Link to={navRoutes.regUser} class="tableRegButton">Nuevo Registro</Link>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>E-mail</th>
                            <th>Password</th>
                            <th>Rol</th>
                            <th>Acciones</th>
                        </tr>
                        <tr>
                            <td> user._id </td>
                            <td> user.name </td>
                            <td> user.lastname </td>
                            <td> user.email </td>
                            <td> user.password </td>
                            <td> user.rol </td>
                            <td>
                                <button type="button" class="tableEditButton">Editar</button><br />
                                <button type="button" class="tableDelButton">Eliminar</button>
                            </td>
                        </tr>
                    </table>
            </section>
        </div>
    )
}
