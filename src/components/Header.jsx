import React from 'react'
import 'animate.css';
import {Link} from 'react-scroll'
const Header = () => {
  return (
    <div className = 'header'>
      <div className = 'menu'>
        <div className = 'menuPosition'>
        <div className = 'menuText'><Link to="sobre" spy={true} smooth={true} offset={50} duration={500}>Sobre</Link></div>
        <div className = 'menuText'><Link to="projetos" spy={true} smooth={true} offset={50} duration={500}>Projetos</Link></div>
        <div className = 'menuText'><Link to="contato" spy={true} smooth={true} offset={50} duration={500}>Contato</Link></div>
        </div>
      </div>
      <div className = 'set'>
      
         <div className = 'headerText'>
         <h1 className= 'animate__animated animate__lightSpeedInLeft'>Higor Pires</h1>
         <h1 id='h1S' className= 'animate__animated animate__lightSpeedInLeft'>Full stack Devoloper</h1>

            
        </div>
        <div className ='button'>
          <h3>Sobre Mim</h3>

        </div>
        </div>
    </div>
  )
}

export default Header