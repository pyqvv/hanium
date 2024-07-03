import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginSignUp from './Components/LoginSignup/LoginSignUp';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>
          <Background/>
          <Navbar/>
          </div>}>
        </Route>
        <Route path="/loginSignUp" element={<LoginSignUp/>} />
      </Routes>
    </Router>
  );
}

export default App;
