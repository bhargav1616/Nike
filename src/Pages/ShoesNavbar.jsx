import React from 'react'
import styled from './Shoes.module.css'

const ShoesNavbar = () => {
  return (
    <div className={styled.ShoesNavbar}>
      <div className={styled['input-wrapper']}>
        <img src="./Images/icon/search.png" alt="" className={styled.searchPng} />
        <input type="text" placeholder="Search shoes..." />
      </div>
      <img src="./Images/icon/heart.png" alt="" className={styled.ShoesIcon} />
      <img src="./Images/icon/suitcase.png" alt="" className={styled.ShoesIcon} />
    </div>
  )
}

export default ShoesNavbar
