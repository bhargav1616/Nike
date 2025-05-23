import React from 'react'
import styled from './Shoes.module.css'
import Navbar from '../components/Navbar'
import ShoesNavbar from './ShoesNavbar'

const Shoes = (props) => {
    return (
        <>
            <div className={styled.Content}>
                <div>
                    <img src={props.ShoesImg} alt="AirMax Shoes" className={styled.ShoesImage} />
                    <div className={styled.ShoesDetails}>
                        <p>Sustainable Materials</p>
                        <h4>Nike Air VaporMax 2023</h4>
                        <p className={styled.MensShoes}>Men's Shoes</p>
                        <h4> ₹ 19,295.00</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shoes
