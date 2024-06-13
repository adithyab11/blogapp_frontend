import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    
    <Route path='/' element={<Signup/>}/>
    <Route path='/signin' element={<Signin/>}/>
    
   </Routes>
   </BrowserRouter>
    
  );
}

export default App;
