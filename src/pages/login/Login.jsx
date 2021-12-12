import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import store from '../../redux/store';
import { types } from '../../redux/types';
import { authServices } from '../../services/auth';
import { navRoutes } from '../../settings/var';

export const Login = () => {

const { register, handleSubmit, /*formState:{ errors }*/ } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = async (data) => {
        try {
          const response = await authServices.signIn(data);
          console.log(response);
          if(response.message === 'OK'){
                dispatch(
                    {
                        type: types.login,
                        payload: response.body

                    });
                navigate(navRoutes.home);

          }
        
        } catch (error) {
          console.log(error);
        }
      };


    return (
        <div class="container lgn">
            <h2>Login</h2>
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div class="element">
                    <label for="user">User</label>
                    <input {...register("email", { required: true })} type="text" id="user" name="email" placeholder="Type your username" required="true" />
                </div>
                <div class="element">
                    <label for="password">Password</label>
                    <input {...register("password", { required: true })} type="password" id="password" name="password" placeholder="Type your password" required="true" />
                </div>
                <div class="element">
                    <input type="submit" value="Send" />
                </div><br />
                <div class="element">
                    <label class="labelLog">¿No tiene cuenta?</label><br />
                    <Link to={navRoutes.regUser} class="loginRegButton">Registrarse</Link>
                </div>
            </form>
        </div>
    )
}
