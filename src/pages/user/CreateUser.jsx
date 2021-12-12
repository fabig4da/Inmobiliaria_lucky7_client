import React from "react"
import { useForm } from "react-hook-form";
import { userServices } from "../../services/user";
export const CreateUser = () => {
const { register, handleSubmit, /*formState:{ errors }*/ } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await userServices.create(data);
      if (response.message === "OK") {
        alert('User saved');
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    // <input type="text" className="form-control"  {...register("name", { required: true })} placeholder="Insert your name"/>
    // <form onSubmit={handleSubmit(onSubmit)} className="container form">
    <div >
      <section class="form-register">
        <h2>Formulario Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)} autocomplete="off">
          <fieldset class="marco">
            <legend>Registro de usuario</legend>

            <label for="name">Nombre:</label><br />
            <input {...register("name", { required: true })} class="controls" type="text" id="name" name="name" placeholder="Escribe tu nombre" required="true" /><br />

            <label for="lastname">Apellido:</label><br />
            <input {...register("lastname", { required: true })} class="controls" type="text" id="lastname" name="lastname" placeholder="Escribe tu apellido" required="true" /><br />

            <label for="email">Email:</label><br />
            <input {...register("email", { required: true })} class="controls" type="email" id="email" name="email" placeholder="example@gmail.com" /><br />

            <label for="password">Contraseña:</label><br />
            <input {...register("password", { required: true })} class="controls" type="password" id="password" name="password" placeholder="Escriba su contraseña" required="true" /><br />

            {/* <label>Validar:</label><br />
            <input {...register("name", { required: true })} type="checkbox" id="validated" name="validated" required="true" value="false" />
            <label for="validated">Validar</label><br/> */}

            <label for="rol">Tipo de usuario: </label><br/>
            <select {...register("rol", { required: true })} class ="controls" id="rol" name="rol">
            <option value="user" selected="true">User</option>
            <option value="admin" hidden="true">Admin</option>
            </select><br/>

            <label hidden="true">Activo: </label><br/>
            <input {...register("activo", { required: true })} type ="hidden" id="activo" name="activo" value="true"/>

            <input class ="boton" type ="submit" value="Enviar"/>
            <input class ="boton" type="reset" value="Reestablecer valores"/>
          </fieldset>
        </form>
      </section>
    </div>
  );
}
