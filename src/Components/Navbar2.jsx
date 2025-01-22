import { useState, useEffect } from 'react';
import './Navbar2.css';
import { motion } from "framer-motion";
import logo from '../assets/lionlogo.png';
import { Link } from 'react-router-dom';
import Button from './Button';

function Navbar2() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);

    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img className="NAVlogo" src={logo}/>
            <h1>LEADERS AT HEART</h1>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Academics' className='nav-links' onClick={closeMobileMenu}>
                Academics
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/LAH-in-the-Media' className='nav-links' onClick={closeMobileMenu}>
                In The Media
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contact Us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Staff'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutUs/AdvisoryBoard'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Advisory Board
              </Link>
            </li>

            <li>
              <Link
                to='/Apply'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Apply
              </Link>
            </li>
          </ul>
          <motion.div
         whileHover={{ scale: 1.2}}
         whileTap={{
            scale: 0.8,
       borderRadius: "100%"
  }}>
          {button && <Link to='/Apply' className="apply"><Button buttonStyle='btn--outline'>APPLY</Button></Link>}
          </motion.div>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;