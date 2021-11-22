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
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="container form">
            {/* register your input into the hook by invoking the "register" function */}
            <h2>Registrar Inmueble</h2>
            <input type="text" className="form-control"  {...register("name", { required: true })} placeholder="Insert property name" />
            <input type="text" className="form-control"  {...register("description", { required: true })} placeholder="Insert property description" />
            <input type="number" className="form-control"  {...register("bedroom", { required: true })} placeholder="Insert property bedrooms" />
            <input type="number" className="form-control"  {...register("bathroom", { required: true })} placeholder="Insert property bathrooms" />
            <select {...register("ciudad", { required: true })} className="form-select">
                <option selected>Selecciona ciudad</option>
                <option value="bogota">Bogota</option>
                <option value="medellin">Medellin</option>
                <option value="cali">Cali</option>
            </select>
            <input type="text" className="form-control"  {...register("address", { required: true })} placeholder="Insert property address" />
            <select {...register("zone", { required: true })} className="form-select">
                <option selected>Selecciona zona</option>
                <option value="sur">sur</option>
                <option value="norte">norte</option>
            </select>
            <input type="submit" className="btn btn-primary" />
        </form>
    );
}
