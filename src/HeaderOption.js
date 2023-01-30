import { Avatar } from '@mui/material';
import React from 'react'
import "./HeadOption.css";



function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='headerOption'>
       {Icon && <Icon className="Headeroption__icon"/>} 
       {avatar && (
        <Avatar className='Headeroption__icon' src={avatar} />
       ) }
       <h3>{title}</h3>
    </div>
  )
}

export default HeaderOption