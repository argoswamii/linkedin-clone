import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='logo'/>

        <div className='header__search'>
            <SearchIcon/>
            <input type='text'/>
        </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notification" />
            <HeaderOption avatar="https://static.tnn.in/photo/msid-94908784,imgsize-105552,updatedat-1665984243573,width-200,height-200,resizemode-75/94908784.jpg"
             title="me"/>
        </div>
        

    </div>
    
  )
}

export default Header