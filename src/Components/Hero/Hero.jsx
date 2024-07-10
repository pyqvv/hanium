import React from 'react'
import './Hero.css'
import notionLogo from '../../assets/Notion_app_logo.png'
import githubLogo from '../../assets/github-logo.png'
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
        <div className='logo'>
          <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
            <img src={notionLogo} alt="Notion Logo" className='notion-logo'/>
          </a>
          <a href="https://github.com/hanium-team-ADAS" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="Github Logo" className='github-logo'/>
          </a>
        </div>
    </div>
  )
}

export default Hero