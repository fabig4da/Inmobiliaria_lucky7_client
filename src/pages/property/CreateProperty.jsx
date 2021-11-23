import React from 'react'
import { propertyServices } from '../../services/property';
import { useForm } from 'react-hook-form';

export const CreateProperty = () => {
    const { register, handleSubmit/*, formState: { errors } */ } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log(data);
            const response = await propertyServices.create(data);
            if (response.message === "OK") {
                return alert('property saved');
            }
            alert('Error saving property');
        } catch (error) {
            console.log(error);
        }
    };


    return (
        // <form onSubmit={handleSubmit(onSubmit)} className="container form">
        <div class="home_content">
            <header>
                <h1 class="titulo"> Test form</h1>
            </header>
            <section class="form-register">
                <h4>Formulario Registro</h4>
                <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
                    <fieldset class="marco">
                        <legend>Registro de inmuebles</legend>

                        <label for="name">Título:</label><br />
                        <input {...register("name", { required: true })} class="controls" type="text" id="name" name="name" placeholder="Título de  la publicación" required="true" /><br />

                        <label for="images">Imagenes:</label><br />
                        <input {...register("images", { required: true })} class="controls" type="file" id="images" name="images" required="true" /><br />

                        <label for="description">Descripción:</label><br />
                        <input {...register("description", { required: true })} class="controls" type="text" id="description" name="description" placeholder="Descripción corta" /><br />

                        <label for="bedrooms">Cantidad de habitaciones:</label><br />
                        <input {...register("bedrooms", { required: true })} class="controls" type="text" id="bedrooms" name="bedrooms" placeholder="0" required="true" /><br />

                        <label for="bathrooms">Cantidad de baños:</label><br />
                        <input {...register("bathrooms", { required: true })} class="controls" type="text" id="bathrooms" name="bathrooms" placeholder="0" required="true" /><br />

                        <label for="city">Ciudad:</label><br />
                        <select {...register("city", { required: true })} class="controls" id="city" name="city" required="true">
                            <option selected="true">Seleccione una opción</option>
                            <option value="bogota">Bogotá</option>
                            <option value="cali">Cali</option>
                            <option value="medellin">Medellín</option>
                            <option value="armenia">Armenia</option>
                            <option value="pereira">Pereira</option>
                        </select><br />

                        <label for="address">Dirección:</label><br />
                        <input {...register("address", { required: true })} class="controls" type="text" id="address" name="address" placeholder="inserte dirección del inmueble" required="true" /><br />

                        <label for="zone">Zona:</label><br />
                        <select {...register("zone", { required: true })} class="controls" id="zone" name="zone" required="true">
                            <option selected="true">Seleccione una opción</option>
                            <option value="norte">Norte</option>
                            <option value="sur">Sur</option>
                            <option value="este">Este</option>
                            <option value="oeste">Oeste</option>
                            <option value="occidente">Occidente</option>
                        </select><br />

                        <label for="neighborhood">Barrio:</label><br />
                        <input {...register("neighborhood", { required: true })} class="controls" type="text" id="neighborhood" name="neighborhood" placeholder="Barrio donde se ubica el inmueble" required="true" /><br />

                        <select {...register("available", { required: true })} class="controls" id="available" name="available" required="true">
                            <option selected="true">Seleccione una opción</option>
                            <option value="true">Disponible</option>
                            <option value="false">No disponible</option>
                        </select><br /><br />

                        <input class="boton" type="submit" value="Enviar" />
                        <input  class="boton" type="reset" value="Reestablecer valores" />
                    </fieldset>
                </form>
            </section>
        </div>
    );
}
