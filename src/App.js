
import './App.css';
import Navbar from './componants/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import About from './componants/Pages/About/About';
import Home from './componants/Pages/Home/Home';
import Contact from './componants/Pages/Contact/Contact';
import Login from './componants/Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
