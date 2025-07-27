import React, { useState, useEffect  } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState({});

    useEffect(() => {
    fetch('/api/events/')
      .then(res => res.json())
      .then(data => {
        const mappedEvents = {};
        data.forEach(event => {
          mappedEvents[event.date] = event.title; // or store full event object
        });
        setEvents(mappedEvents);
      });
  }, []);

  return (
    <div className="calendar-container">
      <Calendar
        onChange={setValue}
        value={value}
        tileClassName={({ date }) => {
          const dateStr = date.toISOString().split('T')[0];
          return events[dateStr] ? 'highlight' : null;
        }}
      />
     <p>Selected: {value.toDateString()}</p>
      {events[value.toISOString().split('T')[0]] && (
        <div><strong>Event:</strong> {events[value.toISOString().split('T')[0]]}</div>
      )}
    </div>
  );
}

export default MyCalendar;