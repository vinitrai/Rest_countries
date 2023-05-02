

import './App.css';
import {CiDark} from 'react-icons/ci'
import {MdOutlineLightMode} from 'react-icons/md'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import AllCountries from './pages/AllCountries';
import SingleCountry from './pages/SingleCountry';
import { useState } from 'react';

export default function App() {
  const [mode,setMode] =useState('light')
return(
  <div className={`app ${mode==='dark'?'dark':''}`}>
    <header>
      <div className='container'>
      <div className="top--bar">
            <h1>Where in the world?</h1>
            {
              mode === 'light' ? 
              <button onClick={()=>setMode('dark')}><CiDark />Dark Mode</button>: 
              <button onClick={()=>setMode('light')}><MdOutlineLightMode />Light Mode</button>
            }
            
           
        </div>
      </div>
    </header>
    <main>
    <BrowserRouter>
     
     <Routes>
       <Route path="/" element={<AllCountries/>}></Route>
       <Route path="/countries/:cname" element={<SingleCountry/>}/>
     </Routes>
    
   
   </BrowserRouter>
    </main>
  
  </div>
)
}