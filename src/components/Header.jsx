import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex  flex-center flex-between '>
        <a href="" className='logo'>
            food diary
        </a>
        <nav>
            <ul className='flex'>
                <li>
                    <Link to="/">
                        home
                    </Link>
                </li>
                <li>
                    <Link to="/checkout">
                        checkout
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
