import React from "react"
import { useForm } from "react-hook-form";
import { userServices } from "../../services/user";
export const CreateUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async(data) => {
        try{
            console.log(data);
            const response = await userServices.create(data);
            if(response.message==="OK"){
                alert('User saved');
            }
            console.log(response);
        }catch(error){
            console.log(error);
        }
    };


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="container form">
      {/* register your input into the hook by invoking the "register" function */}
      <h2>Registrarse</h2>
      <input type="text" className="form-control"  {...register("name", { required: true })} placeholder="Insert your name"/>
      <input type="text" className="form-control"  {...register("lastname", { required: true })} placeholder="Insert your lastname"/>
      <input type="email" className="form-control"  {...register("email", { required: true })} placeholder="Insert your email"/>
      <input type="password" className="form-control"  {...register("password", { required: true })} placeholder="Insert your password"/>
      {errors.name && <span className="text-danger">name is required</span>}
      
      <input type="submit" className="btn btn-primary"/>
    </form>
  );
}
