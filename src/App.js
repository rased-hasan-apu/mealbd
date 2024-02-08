import { BrowserRouter as Router} from 'react-router-dom';
import {  Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import 'font-awesome/css/font-awesome.min.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
