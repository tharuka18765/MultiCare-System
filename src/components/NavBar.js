import React from 'react'
import MenuLink from './MenuLink';


function NavBar() {
  return (
    <div>
       <div className='Menulink'>
      
      <MenuLink linkname = "Home" url = "/"/>
      <MenuLink linkname = "About" url = "about"/>
      <MenuLink linkname = "Contact" url = "contact"/>
      
  
      </div>
    </div>
  )
}

export default NavBar
