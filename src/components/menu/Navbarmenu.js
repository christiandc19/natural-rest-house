import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from '../../assets/logo.png';
import './Navbarmenu.css'


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }



    const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
      
    const toggleSubmenu2 = () => {
      setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);
    };
    
    let boxClassSubMenu2 = ["sub__menus"];
    if(isMenuSubMenu2) {
        boxClassSubMenu2.push('sub__menus__Active');
    }else {
        boxClassSubMenu2.push('');
    }
   

    return (
        <>

<div name='top' className='navbar'>
        <div className='navbar-container'>

    <header className="header__middle">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                        <img src={logo} alt="logo" /> 
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>

                    {/* HOME */}
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>


                    {/* MENTAL HEALTH */}
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Mental Health <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Anxiety`}> Anxiety </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Bipolar`}> Bipolar </NavLink> </li>
                        </ul>
                    </li>

                            {/* SUBSTANCE */}
                    <li onClick={toggleSubmenu2} className="menu-item sub__menus__arrows" > <Link to="#"> Substance <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu2.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/Alcohol`}> Alcohol </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Cocaine`}> Cocaine </NavLink> </li>
                        </ul>
                    </li>

                    {/* ABOUT */}
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>


                    {/* CONTACT */}
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/Contact`}> Contact </NavLink> </li>





                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>
    </div>
    </div>
    </>
    )
}

export default Navbarmenu
