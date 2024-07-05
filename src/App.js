import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import PatientSignUp from './Components/SignUp/PatientSignUp';
import DoctorSignUp from './Components/SignUp/DoctorSignUp';
import Treatment from './Components/Treatment/Treatment';
import Hero from './Components/Hero/Hero';
import DoctorImg from './Components/DoctorImg/DoctorImg';
import Reservation from './Components/Reservation/Reservation'

function App() {
  let heroData = {text1:'365일 비대면 진료가\n가능합니다', text2:'전문 의료인이 즉시 답해드립니다.\n내 위치와 상관없이 진료가 가능합니다.'}

  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="main-container">
          <Navbar/>
          <div className="content-container">
            <Hero heroData={heroData}/>
            <DoctorImg />
          </div></div>} />
        <Route path="/reservation"  element={<div><Navbar/><Reservation/></div>} />
        <Route path="/treatment"  element={<div><Navbar/><Treatment/></div>} />
        <Route path="/login"      element={<div><Navbar/><Login/></div>} />
        <Route path="/doctorSignUp"   element={<div><Navbar/><DoctorSignUp/></div>} />
        <Route path="/patientSignUp"  element={<div><Navbar/><PatientSignUp/></div>} />
        <Route path="/backToLogin"    element={<div><Navbar/><Login/></div>} />
      </Routes>
    </Router>
  );
}

export default App;
