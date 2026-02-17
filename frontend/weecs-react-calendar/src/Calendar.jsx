import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // this is a built in react library
import 'react-calendar/dist/Calendar.css';
import './styles/CalendarStyles.css';

function formatTime(t) {
  if (!t) return '';
  const [hh, mm] = t.split(':');
  let h = parseInt(hh, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  return `${h}:${mm} ${ampm}`;
}

function MyCalendar() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetch('/api/events/')
      .then(res => res.json())
      .then(data => {
        const mapped = {};
        data.forEach(({ date, title, start_time, end_time, description }) => {
          mapped[date] = { title, description, start_time, end_time };
        });
        setEvents(mapped);
      });
  }, []);

  const selectedDateStr = value.toISOString().split('T')[0];
  const selectedEvent = events[selectedDateStr];

    useEffect(() => {
        if (window.location.hash !== '#calendar-section') return;
        const scrollToCal = () => {
            const section = document.getElementById('calendar-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        const timer = setTimeout(scrollToAbout, 100);
        const onHashChange = () => {
            if (window.location.hash === '#calendar-section') {
                setTimeout(scrollToCal, 100);
            }
        };

        window.addEventListener('hashchange', onHashChange);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('hashchange', onHashChange);
        };
    }, []);

  return (
    <div id="calendar-section" className="calendar-container">
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
        <div className="event-date">
          <p className="event-date-value">{value.toDateString()}</p>
        </div>

        
        {selectedEvent ? (
          <div className="event-details">
            <h3>{selectedEvent.title}</h3>
            {(selectedEvent.start_time || selectedEvent.end_time) && (
              <p className="event-time">
                 {formatTime(selectedEvent.start_time)}
                 {selectedEvent.end_time ? ` – ${formatTime(selectedEvent.end_time)}` : ''}
              </p>
            )}
            {selectedEvent.description && <p>{selectedEvent.description}</p>}
          </div>
        ) : (
          <p className="event-no-event">No events scheduled</p>
        )}
      </div>
    </div>
  );
}

export default MyCalendar;