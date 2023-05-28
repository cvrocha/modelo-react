import { useState } from 'react'
import reactLogo from './assets/react.svg'
import modeloLogo from './assets/modelo.png'

function App() {
  return (
    <>
      <div className="flex justify-center items-center flex-1">
        <a target="_blank" rel="noreferrer">
          <img src={modeloLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-6xl text-slate-200">Modelo React</h1>
      <div className="card"></div>
      <p className="read-the-docs text-2xl">
        Bem-vindo ao projeto modelo react
      </p>
    </>
  )
}

export default App
