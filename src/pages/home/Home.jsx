import React from 'react'
import img from './../../images/img1.jpg';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
    const state = useSelector(state => state);
    useEffect(() => {
        console.log(state.authReducer);
    }, [])
    return (
        <div class="">
            
        </div>
    )
}
