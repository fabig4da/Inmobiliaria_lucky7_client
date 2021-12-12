import React, { useEffect, useState } from 'react'
import { navRoutes } from './../../settings/var';
import { Link } from 'react-router-dom';
import { propertyServices } from './../../services/property';

export const MainProperty = () => {
    const [properties, setProperties] = useState([]);
    const [action, setAction] = useState(1);

    useEffect(() => {
        propertyServices.getMany()
            .then(({ body, OK }) => setProperties(body))
            .catch(console.log);
    }, [action])
    const eliminarProprerty = (id)=>{
        const authorised = window.confirm('¿Esta seguro que desea eliminar esta propiedad?');
        if(!authorised)
            return
        propertyServices.delete(id)
        .then((data) => {
            console.log(data)
            
            if(data.message !== 'OK'){
                return alert('Error trying to delete')
            }
            alert('Deleted succesfully');
            setAction(a=>a+1);
        })
        .catch(console.log);
    }

    return (
        <div>
            <section class="sectionTable">
                <h4>Tabla de inmuebles registrados</h4>
                <hr />
                <br />
                <table>
                    <caption>Listado de inmuebles</caption>
                    <Link to={navRoutes.regPropery} class="tableRegButton">Nuevo Registro</Link>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Nombre</th>
                        <th>Imagenes</th>
                        <th>Habitaciones</th>
                        <th>Baños</th>
                        <th>Ciudad</th>
                        <th>Dirección</th>
                        <th>Zona</th>
                        <th>Barrio</th>
                        <th>Acciones</th>
                    </tr>
                    {properties[0] && properties.map(property => (
                        <tr>
                            {/* <td> property._id </td> */}
                            <td>{ property.name }</td>
                            <td>
                                <img src={`https://inmobiliaria-lucky7.herokuapp.com/image/${property.images}`} alt="" />
                            </td>
                            <td>{ property.bedrooms }</td>
                            <td>{ property.bathrooms }</td>
                            <td>{ property.city }</td>
                            <td>{ property.address }</td>
                            <td>{ property.zone }</td>
                            <td>{ property.neighborhood }</td>
                            <td>
                                <button type="button" class="tableEditButton" >Editar</button><br />
                                <button type="button" class="tableDelButton" onClick={()=>eliminarProprerty(property._id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))
                    }
                </table>
            </section>
        </div>
    )
}
