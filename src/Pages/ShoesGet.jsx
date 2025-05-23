import React, { useState } from 'react';
import Shoes from './Shoes';
import styled from './Shoes.module.css';
import Navbar from '../components/Navbar';
import ShoesNavbar from './ShoesNavbar';

import AirMaxBn1 from '../assets/AirMaxBn8/1.jpeg';
import AirMaxBn2 from '../assets/AirMaxBn8/2.jpeg';
import AirMaxBn3 from '../assets/AirMaxBn8/3.jpeg';
import AirMaxBn4 from '../assets/AirMaxBn8/4.jpeg';
import AirMaxBn5 from '../assets/AirMaxBn8/5.jpeg';
import AirMaxBn6 from '../assets/AirMaxBn8/6.jpeg';

import img1 from '../assets/AirMaxBn/1.jpeg';
import img2 from '../assets/AirMaxBn/2.jpeg';
import img3 from '../assets/AirMaxBn/3.jpeg';
import img4 from '../assets/AirMaxBn/4.jpeg';
import img5 from '../assets/AirMaxBn/5.jpeg';
import img6 from '../assets/AirMaxBn/6.jpeg';

import AirMax1 from '../assets/AirMax1/1.jpeg';
import AirMax2 from '../assets/AirMax1/2.jpeg';
import AirMax3 from '../assets/AirMax1/3.jpeg';
import AirMax4 from '../assets/AirMax1/4.jpeg';
import AirMax5 from '../assets/AirMax1/5.jpeg';
import AirMax6 from '../assets/AirMax1/6.jpeg';

import AirMax901 from '../assets/AirMax90/1.jpeg';
import AirMax902 from '../assets/AirMax90/2.jpeg';
import AirMax903 from '../assets/AirMax90/3.jpeg';
import AirMax904 from '../assets/AirMax90/4.jpeg';
import AirMax905 from '../assets/AirMax90/5.jpeg';
import AirMax906 from '../assets/AirMax90/6.jpeg';

import VaporMax1 from '../assets/VaporMax/1.jpeg';
import VaporMax2 from '../assets/VaporMax/2.jpeg';
import VaporMax3 from '../assets/VaporMax/3.jpeg';
import VaporMax4 from '../assets/VaporMax/4.jpeg';
import VaporMax5 from '../assets/VaporMax/5.jpeg';
import VaporMax6 from '../assets/VaporMax/6.jpeg';

const categories = {
    "Air Max ": [AirMaxBn1, AirMaxBn2, AirMaxBn3, AirMaxBn4, AirMaxBn5, AirMaxBn6],
    "Air Max BN": [img1, img2, img3, img4, img5, img6],
    "Air Max 1": [AirMax1, AirMax2, AirMax3, AirMax4, AirMax5, AirMax6],
    "Air Max 90": [AirMax901, AirMax902, AirMax903, AirMax904, AirMax905, AirMax906],
    "Vapor Max": [, VaporMax1, VaporMax2, VaporMax3, VaporMax4, VaporMax5, VaporMax6],
};

const ShoesGet = () => {
    const [activeCategory, setActiveCategory] = useState("Air Max ");

    return (
        <>
            <Navbar />
            <hr />
            <ShoesNavbar />
            <hr />
            <div className={styled.TopTitle}>
                <p>Shoes , Air Max , VaporMax</p>
                <h3>Men's VaporMax Shoes</h3>
            </div>
            <div className={styled.Main}>
                <div className={styled.StandNavbar}>
                    <div className={styled.ScrollNavbar}>
                        {Object.keys(categories).map((category) => (
                            <p key={category}>
                                <a
                                    href="#"
                                    onClick={() => setActiveCategory(category)}
                                    style={{
                                        fontWeight: category === activeCategory ? "bold" : "normal",
                                        color: category === activeCategory ? "#111" : "#555",
                                        textDecoration: "none"
                                    }}
                                >
                                    {category}
                                </a>
                            </p>
                        ))}
                    </div>
                </div>

                <div className={styled.Content}>
                    {categories[activeCategory].map((img, index) => (
                        <Shoes key={index} ShoesImg={img} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ShoesGet;
