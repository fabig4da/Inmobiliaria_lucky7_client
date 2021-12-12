import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navRoutes } from '../../settings/var'
import { userServices } from './../../services/user';

export const UserMain = () => {
    const [users, setUsers] = useState([]);
    const [action, setAction] = useState(1);

    useEffect(() => {
        userServices.getMany()
            .then(({ body, OK }) => setUsers(body))
            .catch(console.log);
    }, [action])
    const eliminarUser = (id) => {
        const authorised = window.confirm('¿Esta seguro que desea eliminar este usuario?');
        if (!authorised)
            return
        userServices.delete(id)
            .then((data) => {
                console.log(data)

                if (data.message !== 'OK') {
                    return alert('Error trying to delete')
                }
                alert('Deleted succesfully');
                setAction(a => a + 1);
            })
            .catch(console.log);
    }
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
                        {/* <th>ID</th> */}
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>E-mail</th>
                        <th>Password</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                    {users[0] && users.map(user =>
                        <tr>
                            {/* <td>{ user._id }</td> */}
                            <td>{ user.name }</td>
                            <td>{ user.lastname }</td>
                            <td>{ user.email }</td>
                            <td>{ user.password }</td>
                            <td>{ user.rol }</td>
                            <td>
                                <button type="button" class="tableEditButton">Editar</button><br />
                                <button type="button" class="tableDelButton" onClick={()=>eliminarUser(user._id)}>Eliminar</button>
                            </td>
                        </tr>
                    )}
                </table>
            </section>
        </div>
    )
}
