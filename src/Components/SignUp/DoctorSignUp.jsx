import { useNavigate } from 'react-router-dom'
import React from 'react'
import './SignUp.css'

const DoctorSignUp = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

  return (
    <div className='signup-container'>
        <div className='header'>
            <div className='text'>회원가입</div>
        </div>
        <div className='inputs'>
            <div className="input">
                <div className='field_name'>이름</div>
                <input type="text" placeholder='Name' name='name'/>
            </div>  
            <div className="input">
                <div className='field_name'>전공</div>
                <input type="text" placeholder='전공 입력' name='major'/>
            </div>
            <div className="input">
                <div className='field_name'>이메일</div>
                <input type="email" placeholder='Email Id' name='email'/>
            </div>
            <div className="input">
                <div className='field_name'>비밀번호</div>
                <input type="password" placeholder='Password' name='password'/>
            </div>
            <div className="input">
                <div className='field_name'>전화번호</div>
                <div className='input_input'>
                    <input type="text" placeholder='000' maxLength="3" pattern="[0-1]{3}" name='phone1' required/>
                    -
                    <input type="text" placeholder='0000' maxLength="4" pattern="[0-9]{4}" name='phone2' required/>
                    -
                    <input type="text" placeholder='0000' maxLength="4" pattern="[0-9]{4}" name='phone3' required/>
                </div>
            </div>
            <div className="input">
                <div className='field_name'>면허정보</div>
                <input className="license-input" type="text" placeholder="면허번호 입력" name='License' required />
            </div>
        </div>
        <div className="submit-container">
            <div className="submit">회원가입</div>
            <div className="submit gray" onClick={handleClick}>로그인</div>
        </div>
    </div>
  )
}

export default DoctorSignUp
