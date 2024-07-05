import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login = () => {
    const navigate = useNavigate();

    const handleClickforDoctor = () => {
        navigate('/doctorSignUp');
    }

    const handleClickforPatient = () => {
        navigate('/patientSignUp');
    }

  return (
    <div className='login-container'>
        <div className='header'>
            <div className='text'>로그인</div>
        </div>
        <div className='inputs'>
            <div className="input">
                <div className='field_name'>이메일</div>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <div className='field_name'>비밀번호</div>
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="submit-container">
            <div className="submit">로그인</div>
        </div>
        <div className='signUp'>
            <div className="doctor-signUp" onClick={handleClickforDoctor}>의사 회원가입</div>
            <div className="patient-signUp" onClick={handleClickforPatient}>환자 회원가입</div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default Login
