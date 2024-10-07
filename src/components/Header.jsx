import React from 'react'

function Header() {
  return (
    <header className='flex  flex-center flex-between '>
        <a href="" className='logo'>
            food diary
        </a>
        <nav>
            <ul className='flex'>
                <li>
                    <a href="">
                        home
                    </a>
                </li>
                <li>
                    <a href="">
                        checkout
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
