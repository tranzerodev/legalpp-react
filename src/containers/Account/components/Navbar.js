import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classname'
import '../styles.css'

const navs = [
  { title: 'Profile', to: '/account/profile' },
  { title: 'Billing', to: '/account/billing' },
  { title: 'Documents', to: '/account/documents' },
  { title: 'Activity', to: '/account/activity' },
]

const Navbar = ({ pathname }) => {
  return (
    <div className="navbar">
      <div className="navs">
        {
          navs.map(e => (
            <Link key={e.to} className={cn('nav-item', { 'selected': pathname === e.to })} to={e.to}
              >{e.title}
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar