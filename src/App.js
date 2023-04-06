import React  from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import TraineeComponents from './components/TraineeComponent.js';
import MyForm from './MyForm';


function App() {
  return (
  
   <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'  element={<MyForm />} />
        <Route path='/table' element={<TraineeComponents/>} />
    </Routes>    
    </Router>
    
  );
}

export default App;
