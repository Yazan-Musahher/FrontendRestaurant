import React from 'react';
import Pizaa from "../../assets/gallery01.png"
import './item.css';

import './SpecialMenu.css';

const item = () => (
    <section class="packages" id="packages">

    <h1 class="heading"> our <span>Foods</span> </h1>

    <div class="box-container">

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src={Pizaa} />
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

        </div>

        </section>
);

export default item;
