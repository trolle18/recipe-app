/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function BurgerMenu() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // // HIDE DROPDOWN ON SCROLL
  // const controlShow = () => {
  //   if (typeof window !== 'undefined') { 
  //     if (window.scrollY > lastScrollY) { // if scroll down hide
  //       setShow(false); 
  //     } else { setShow(true) } // if scroll up show 
  //     setLastScrollY(window.scrollY); // remember current page location to use in the next move
  //   }
  // };
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', controlShow);
  //     return () => { // cleanup function
  //       window.removeEventListener('scroll', controlShow);
  //     };
  //   }
  // }, [lastScrollY]);
  
  const button = document.getElementById("menu-btn");
  const y = document.getElementById("dropdown");
  // const navOverflow = document.getElementById("nav-overflow");
  const body = document.body;

  // OPEN BURGER MENU
  const openMenu = () => {
    // const button = document.getElementById("menu-btn");
    // const y = document.getElementById("dropdown");
    button.classList.toggle("change");
    if (y.classList.contains("hidden")) {
      y.classList.remove("hidden");
      y.classList.add("show");
      body.classList.add("overflow")
    } else {
      y.classList.remove("show");
      y.classList.add("hidden");
      body.classList.remove("overflow")
    }
  }

  // // Disable document body scroll, when dropdown is visible
  // if (y.classList.contains("show")) { 
  //   body.classList.add("overflow")
  //   // body.classList.remove("noscroll")
  // } else {
  //   body.classList.remove("overflow")
  //   // body.classList.add("noscroll")
  // }

  return (
    <>
    <div className='burger'>   
      <button onClick={openMenu} className="burger__menu-btn" id="menu-btn">
        <svg viewBox="0 0 10 8">
            <path d="M1 1 h8"/>
            <path d="M1 4 h8"/>
            <path d="M1 7 h8"/>            
        </svg> 
      </button>
      <div className={`burger__dropdown hidden ${show && ""}`} id="dropdown">
        <div className="dropdown-inner-cntr">
        <Search/>
        <Link to={'/cuisine/italian'}>Italian</Link>
        <Link to={'/cuisine/american'}>American</Link>
        <Link to={'/cuisine/thai'}>Thai</Link>
        <Link to={'/cuisine/japanese'}>Japanese</Link>
        <Link to={'/favorites'}>Favorites</Link>
        </div>
      </div>
    </div>
    </>
  );
};