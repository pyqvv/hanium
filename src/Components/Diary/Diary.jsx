import './Diary.css'
import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Diary = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({
    '2024-08-01': 'Meeting with Bob',
    '2024-08-15': 'Project deadline',
    '2024-08-29': 'Doctor appointment'
  });
 
  const onClickDay = (value) => {
    const dateStr = value.toISOString().split('T')[0];
    setSelectedDate(dateStr);
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
