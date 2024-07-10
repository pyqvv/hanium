import './Diary.css';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import appts from '../../assets/appt.json';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({}); // 초기 상태는 빈 객체로 설정

  useEffect(() => {
    // 외부 JSON 파일에서 데이터를 가져와서 events 상태를 설정
    setEvents(appts.appt);
  }, []); // 한 번만 실행되도록 빈 배열을 전달
 
  const onClickDay = (value) => {
    const dateStr = formatDate(value);
    setSelectedDate(dateStr);
  };

  const formatDate = (date) => {
    // 로컬 시간대를 기준으로 날짜를 포맷팅하여 yyyy-MM-dd 형식으로 반환
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.slice(-2); // getMonth()는 0부터 시작하므로 1을 더해줌
    const day = `0${date.getDate()}`.slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="diary-container">
      <header className="diary-header">
        <h2>예약 조회</h2>
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={onClickDay}
          locale="en-US" // 일요일부터 시작
          tileClassName={({ date, view }) => {
            if (view === 'month' && date.getDay() === 6) {
              return 'saturday';
            }
          }}
        />
        {selectedDate && (
          <div className="event-details">
            <h3>{selectedDate}</h3>
            <p>{events[selectedDate] || 'No events'}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default Diary;
