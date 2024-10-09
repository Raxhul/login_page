import React from 'react'
import nav_img from './assets/Happy/1_rj.png'
import rj from './assets/Happy/rj.png'
import well from './assets/Happy/wellcome.png'
import login from "./assets/login_1.png"

const Nav = () => {
  return (
    <div className='flex justify-between items-center gap-5 mt-1  bg-[#FCE2CE]'>
  <div className='flex items-center'>
    
    <img src={rj} className='h-10  ml-2'/>
    
  </div>
  <div className='h-9'>
  <img src={well} className='h-9'/>
  </div>
  <div className='flex items-center'>  
      <ul className='flex items-center gap-9 mr-5 min-w-[100px]'>
        <li className=''>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {/*<span className=''>
      <label class="burger" for="burger">
  <input type="checkbox" id="burger"/>
  <span></span>
  <span></span>
  <span></span>
</label>
      </span>*/}


      </div>

    </div>
  )
}

export default Nav