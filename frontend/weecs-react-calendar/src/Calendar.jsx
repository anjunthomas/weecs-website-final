import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/CalendarStyles.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetch('/api/events/')
      .then(res => res.json())
      .then(data => {
        const mapped = {};
        data.forEach(({ date, title, description }) => {
          mapped[date] = { title, description };
        });
        setEvents(mapped);
      });
  }, []);

  const selectedDateStr = value.toISOString().split('T')[0];
  const selectedEvent = events[selectedDateStr];

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
        tileContent={({ date }) => {
          const dateStr = date.toISOString().split('T')[0];
          return events[dateStr] ? (
            <div className="circle-indicator">{date.getDate()}</div>
          ) : null;
        }}
        tileClassName={({ date }) => {
          const dateStr = date.toISOString().split('T')[0];
          return events[dateStr] ? 'hide-default' : '';
        }}
      />

      <div className="selected-event">
        <p><strong>Date:</strong> {value.toDateString()}</p>
        {selectedEvent ? (
          <div className="event-details">
            <h3>{selectedEvent.title}</h3>
            {selectedEvent.description && <p>{selectedEvent.description}</p>}
          </div>
        ) : (
          <p>No events on this date.</p>
        )}
      </div>
    </div>
  );
}

export default MyCalendar;