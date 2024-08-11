import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

window.addEventListener('load', () => {
  // Adaptação de código para limpar console
  [1, 2, 3].forEach((e, i) => {
    setTimeout(() => {
      console.clear();
    }, i * 1000)
  })
})
