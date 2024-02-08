import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-dark min-h-screen w-full text-white before:content-[''] before:absolute before:bg-bgaccent before:w-[300px] before:h-[300px] before:blur-[100px] before:-left-[50px] before:top-[100px] z-10 px-96 py-16">
      <App />
    </div>
  </React.StrictMode>
)
