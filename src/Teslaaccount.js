import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Teslaaccount.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {useSelector, useDispatch} from 'react-redux'
import { logout, selectUser } from './features/userSlice';
import Car from './Car';
import { auth } from './firebase';

function Teslaaccount({isMenuOpen, setIsMenuOpen}) {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const logoutOfApp = () => {
      auth.signOut().then(() => {
        dispatch(logout())
        Navigate('/')
      }).catch((error) => console.log(error))
    }

  return (
    <div className='teslaaccount'>
      <div className='teslaaccount__header'>
        <div className='teslaaccount__logo'>
            <Link to="/">
            <img 
                src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png" 
                alt="Logo" 
                className="teslaaccount__logoimg"
            />
            </Link>
        </div>
        <div className='teslaaccount__links'>
            <Link to="/teslaaccount">Model S</Link>
            <Link to="/teslaaccount">Model 3</Link>
            <Link to="/teslaaccount">Model Y</Link>
            <Link to="/teslaaccount">Model Y</Link>
            <Link to="/teslaaccount">Solar Roof</Link>
            <Link to="/teslaaccount">Solar Panels</Link>
            <Link to="/teslaaccount">Shop</Link>
            <Link to="/" onClick={logoutOfApp}>Logout</Link>
            <div className='teslaaccount__menu' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon className='teslaaccount__closeMenu' /> : <MenuIcon /> }
            </div>
        </div>

      </div>
      <div className='teslaaccount__info'>
        <div className='teslaaccount__person'>
            <h4>{user?.displayName + "'s"} Tesla</h4>
        </div>
        <div className='teslaaccount__inforight'>
            <Link to="/teslaaccount">Home</Link>
            <Link to="/teslaaccount">Account</Link>
            <Link to="/teslaaccount">History</Link>
            <Link to="/" onClick={logoutOfApp}>Sign out</Link>
        </div>
      </div>
      <div className='teslaaccount__car'>
        <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815' model='Model S' testdrive />
        <Car imgSrc='https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815' model='Model X' />
      </div>
    </div>
  )
}

export default Teslaaccount
