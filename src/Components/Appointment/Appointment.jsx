import './Appointment.css'
import React, { useEffect, useState } from 'react'

const Appointment = () => {
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');

  useEffect(() => {
    // 오늘 날짜 가져오기
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
    const dd = String(today.getDate()).padStart(2, '0');
    const todayStr = `${yyyy}-${mm}-${dd}`;

    // 다음 달의 마지막 날짜 계산
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0); // 다음 달의 0번째 날은 이번 달의 마지막 날을 의미
    const nextMonthYyyy = nextMonth.getFullYear();
    const nextMonthMm = String(nextMonth.getMonth() + 1).padStart(2, '0');
    const nextMonthDd = String(nextMonth.getDate()).padStart(2, '0');
    const maxDateStr = `${nextMonthYyyy}-${nextMonthMm}-${nextMonthDd}`;

    setMinDate(todayStr);
    setMaxDate(maxDateStr);
  }, []);

  return (
    <div className='appt-container'>
      <div className='inputs'>
        <div className="input">
          <form>
            <select>
              <option>김교수</option>
              <option>이교수</option>
            </select>
          </form>
        </div>
        <div className="input">
          <input type='date' min={minDate} max={maxDate}></input>
        </div>
        <div>
            <input type='time'/>
        </div>
      </div>
      <div className='buttons'>
        <div className='submit'>예약</div>
        <div className="reset">취소</div>
      </div>
    </div>
  )
}

export default Appointment;
