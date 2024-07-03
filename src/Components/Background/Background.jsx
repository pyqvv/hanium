import './Background.css'
import mainImage from '../../assets/mainPage.jpg'

function MainPage() {
    return (
        <div className='main-container'>
            <img src={mainImage} className='background' alt=""></img>
        </div>
      )
}

export default MainPage