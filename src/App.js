import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Navbar from './Componet/Navbar';
import Submission from './Componet/Submission';

import Front from './Methods/Front';
import Detail from './Party/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
          <Route path='/Submission' element={<Submission/>}></Route>
          <Route path='/Detail' element={<Detail/>}></Route>
          <Route path='/Front' element={<Front/>}></Route>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
