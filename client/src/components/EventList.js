import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap';

function EventList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
      fetch("/events")
        .then((r) => r.json())
        .then(setEvents);
    }, []);

  return (
    <>
    {events.map((event) => (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={event.image_url} />
      <Card.Body>
        <Card.Title>{event.title}</Card.Title>
        <Card.Text>
          {event.description}
        </Card.Text>
      </Card.Body >
    </Card>
     ))}
  </>
  )
}

export default EventList