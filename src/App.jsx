import React, {lazy, Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles/App.css'

const Home = lazy(() => import('./components/Home'));
const Test = lazy(() => import('./components/Test'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path={"/recibos-psi/"} element={<Home/>}/>
          <Route path={"/recibos-psi/test/"} element={<Test/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
