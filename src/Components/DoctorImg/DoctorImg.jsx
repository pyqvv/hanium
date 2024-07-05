import './DoctorImg.css'
import doctorImg from '../../assets/doctor-emoji.png'

const DoctorImg = () => {
  return (
    <div className='container'>
        <img src={doctorImg} className='doctorImg' alt="doctorImg" />
    </div>
  )
}

export default DoctorImg