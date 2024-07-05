import React from 'react'
import './Hero.css'
import notionLogo from '../../assets/Notion_app_logo.png'
import { useNavigate } from 'react-router-dom'

const Hero = ({heroData}) => {
  const navigate = useNavigate();

    const moveToReservation= () => {
        navigate('/reservation');
    }

  return (
    <div className='hero'>
        <div className='hero-text'>
          <p>{heroData.text1.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>)}</p>
        </div>
        <div className='sub-text'>
          <p>{heroData.text2.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>)}</p>
        </div>
        <div className='hero-button' onClick={moveToReservation}>
          <p>진료 예약</p>
        </div>
        <div>
          <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
            <img src={notionLogo} alt="Notion Logo" className='notion-logo'/>
          </a>
        </div>
    </div>
  )
}

export default Hero