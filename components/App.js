import React, { useState } from 'react';
import { Route,Routes} from "react-router-dom";
import '../css/new.css';

// css
// import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

// login
import LoginForm from './LoginForm';

import ReactThrottle from './R095_reactThrottle';

import Register from './Register/Register';

const App = () => {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('main')
  const changeUserName =(n)=>{
    setName(n)
  }
  const changeMode = (m) =>{
    setMode(m)
  }
    return (
      <div className="App">
        
        <HeaderAdmin name={name}/>
        <Routes>
        <Route exact path='/' element={<LoginForm changeUserName ={changeUserName}
                                                      changeMode ={changeMode}/>}/>
        <Route exact path='/ReactThrottle' element={<ReactThrottle></ReactThrottle>} />
        <Route exact path='/Register' element={<Register/>}/>
        </Routes>
         
        <Footer/>
        
      </div>
    );
}

export default App;