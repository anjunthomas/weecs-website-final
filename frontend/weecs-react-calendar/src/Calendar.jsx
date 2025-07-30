import React, { useState, useEffect  } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/CalendarStyles.css';
import './index.css';

function MyCalendar() {
  const [value, setValue] = useState(new Date());
  const [events, setEvents] = useState({});
  const dateStr = value.toISOString().split('T')[0];
  const selectedEvent = events[dateStr];

    useEffect(() => {
    fetch('/api/events/')
      .then(res => res.json())
      .then(data => {
        const mappedEvents = {};
        data.forEach(event => {
          mappedEvents[event.date] = 
          {title: event.title,
          description: event.description,
          };

        });
        setEvents(mappedEvents);
      });
  }, []);

  return (
    <div className="calendar-container">
      <div className="calendar-section1">
        <Calendar
          onChange={setValue}
          value={value}
          tileClassName={({ date }) => {
            const dateStr = date.toISOString().split('T')[0];
            return events[dateStr] ? 'highlight' : null;
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
    </div>
  );
}

export default MyCalendar;