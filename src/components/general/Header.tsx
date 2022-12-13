import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navbarLink } from "../../data/navbarLink"
import "../../style/general/Header.scss"
import { HiMenu } from "react-icons/hi"
import { MdClose } from "react-icons/md"

function Header() {
  const [active, setActive] = useState<number>(0);
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  return (
    <header id="header" className='header'>
      <div className="header__container container">
        <div className='header__logo'>
          <Link onClick={() => window.scrollTo(0, 0)} to="">Client</Link>
        </div>
        <nav className={`${isMenuToggle ? "toggle" : ""}`}>
          <ul className='header__navbar'>
            {
              navbarLink.map(item => {
                return (
                  <li key={item.id}
                    onClick={() => { setActive(item.id); setIsMenuToggle(false); window.scrollTo(0, 0) }}
                    className={`header__navbar__item`}>
                    <Link className={`${active === item.id ? " active" : ""}`} to={item.link}>{item.title}</Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        <div onClick={() => setIsMenuToggle(!isMenuToggle)} className='menu__toggle'>
          {isMenuToggle ? <MdClose size={35} /> : <HiMenu size={35} />}
        </div>
      </div>
    </header>
  )
}

export default Header
