import React, {useState} from 'react'
import curriculo from '../img/Curriculo.png'
const Modal = ({open,onClose}) => {

    if(!open) return null

  return (
    <div className ='overlay'>
        <div className ='modalContainer'>
        <button  className ='modalButton'onClick = {onClose}></button>
        <button  className ='modalButton1'onClick = {onClose}></button>
        <img className = 'modalImg' src ={curriculo}></img>
        </div>
    </div>
  )
}

export default Modal