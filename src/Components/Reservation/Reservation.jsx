import React from 'react'
import DoctorList from '../DoctorList/DoctorList'
import Diary from '../Diary/Diary'
import './Reservation.css'
import Appointment from '../Appointment/Appointment'

const Reservation = () => {
  return (
    <div className="reservation-container">
      <div className='res'>
        <DoctorList />
        <Appointment/>
      </div>
      <div className='calendar'>
        <Diary />
      </div>
    </div>
  )
}

export default Reservation