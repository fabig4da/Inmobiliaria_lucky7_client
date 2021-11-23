import React from 'react'
import img from './../../images/img1.jpg';

export const Home = () => {
    return (
        <div class="home_content">
            <header>
                <h1>Bienvenido a la Inmobiliaria XYZ</h1><br />
            </header>
            <section>
                <image class="imgBorderR" src={img} />
                <aside>
                    <p>By Elías T.</p>
                </aside>
            </section>
        </div>
    )
}
