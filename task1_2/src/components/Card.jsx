/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../styles/card.css'

function Card({date,button1,button1color,profilepic,name,subtitle,downloadbtn}) {
  return (
    <div>
        <div className='card'>
            <span className='date'>{date}</span>
            <div className='profile'>
            <button className='profile-button'style={{ backgroundColor: button1color }}>{button1}</button>
                <div className='profile-info'>
                <img src={profilepic} alt='pic' className='profile-pic'/>
                <span className='profile-name'>{name}</span>
                </div>
               
    
            </div>
            <p className='subtitle'>{subtitle}</p>
            <button className='download'>{downloadbtn} </button>
        </div>
    </div>
  )
}

export default Card