import React,{useState} from 'react'
import './App.css'
import Modal from './components/Modal'
import Header from './components/Header'
import Sobre from './components/Sobre'
import Conhecimentos from './components/Conhecimentos'
import Projetos from './components/Projetos'
import Rodape from './components/Rodape'
import Contato from './components/Contato'


function App () {
  
  return (
    <div>
      <Header/>
      <Sobre />
      <Modal />
      <Conhecimentos/>
      <Projetos/>
      <Contato/>
      

    </div>
  ) 
}

export default App