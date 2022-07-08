import React from 'react'
import animal from '../img/animal.png'
import cruzeiro from '../img/cruzeiro.png'
import js from '../img/javascript.png'
import html from '../img/html.png'
import css from '../img/css.png'
import code from '../img/code.png'
import play from '../img/play.png'
const Projetos = () => {
  return (
    <div  className = 'projetos'>
        <div className = 'position'>
        <div className = 'sobreTitle'><h6>Projetos</h6></div>
           <div className = 'projetosPosition'>
           <div className = 'projetosBox'>
             <div className = 'projetosSkillsBox'>
               <div className = 'projetosSkills'>
                 <img className = 'projetosSkillsImg' src ={js}></img>
                
               </div>
               <div className = 'projetosSkills'>
                 <img className = 'projetosSkillsImg' src ={html}></img>
                 
               </div>
               <div className = 'projetosSkills'>
                 <img className = 'projetosSkillsImg' src ={css}></img>
                 
               </div>
             </div>
             
             
             <div className = 'imgButtonBox'>
               <img src={animal} className='projetosImg' alt=""/>
               <a href = 'https://github.com/hlpires/reinoAnimalProject'><div className ='buttonImg'>

               <img className = 'buttonIcon' src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <div className ='buttonImg1'>
               <img className = 'buttonIcon' src = {play}></img>
                 <div className = 'buttonImgText'>
                   Demo
                 </div>
               </div>
             </div>
           </div>
           <div className = 'projetosBox'>
             <div className = 'projetosSkillsBox'>
               <div className = 'projetosSkills'>
                 <img className = 'projetosSkillsImg'></img>
                 <div className = 'projetosText'> </div>

               </div>
             </div>
             <div className = 'imgButtonBox'>
               <img src={cruzeiro} className='projetosImg' alt=""/>
               <a href = 'https://github.com/hlpires/reinoAnimalProject'><div className ='buttonImg'>
                 <img className = 'buttonIcon'  src = {code}></img>
                 <div className = 'buttonImgText'>
                   Codigo
                 </div>
               </div></a>
               <div className ='buttonImg1'>
               <img className = 'buttonIcon' src = {play}></img>
                 <div className = 'buttonImgText'>
                    Demo
                 </div>
               </div>
             </div>
           </div>
           </div>
        </div>
    </div>
  )
}

export default Projetos