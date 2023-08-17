// import { Container, Row, Col, Card, Accordion, Button } from "react-bootstrap";
// // import Particle from "../Particle";
// // import Techstack from "./Techstack";
// // import Aboutcard from "./AboutCard";
// // import laptopImg from "../../Assets/about.png";
// // import Toolstack from "./Toolstack";
// import BackToTopButton from "../BackToTop/BackToTopButton";

// import React, { useState } from 'react';

// const eventsData = [
//   {
//     title: 'Event 1',
//     date: 'August 20, 2023',
//     location: 'Venue 1',
//     details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     title: 'Event 2',
//     date: 'September 5, 2023',
//     location: 'Venue 2',
//     details: 'Pellentesque euismod magna vel magna gravida.',
//   },
//   // Add more events here
// ];
// const Event = () => {

//   const [activeEvent, setActiveEvent] = useState(null);

//   const handleEventClick = (index) => {
//     if (activeEvent === index) {
//       setActiveEvent(null);
//     } else {
//       setActiveEvent(index);
//     }
//   };

//   return (
//     <Container fluid className="about-section">
//       <Container>
//         <h1 >
//           <span style={{fontWeight: "500", fontSize: "2em", color: "white"}}>Our </span>
//           <span className="team-heading"><strong className="purple">Events</strong></span>
//           <span style={{fontWeight: "500", fontSize: "2em"}}> 🚀</span>
//         </h1>
//         <Row>
// //           <Col md = {12}>
// //           <Accordion>
// //             {eventsData.map((event, index) => (
//               <Card key={index} className="event-card">
//                 <Card.Header className="event-card-header">
//                   <Accordion.Toggle
//                     as={Button}
//                     variant="link"
//                     eventKey={index.toString()}
//                     className={`event-toggle ${activeEvent === index ? 'active' : ''}`}
//                     onClick={() => handleEventClick(index)}
//                   >
//                     {event.title} - {event.date}
//                   </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey={index.toString()}>
//                   <Card.Body className="event-card-body">
//                     <p><strong>Date:</strong> {event.date}</p>
//                     <p><strong>Location:</strong> {event.location}</p>
//                     <p><strong>Details:</strong> {event.details}</p>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//             ))}
//           </Accordion>
//           </Col>
          
//         </Row>
        

//       </Container>
//       <BackToTopButton />
//     </Container>
//   );
// }

// export default Event;

import React, { useState } from 'react';
import { Card, Button, Container, Col, Row, Collapse } from 'react-bootstrap';
import eventsData from "./eventsData"; // Import the events data


function EventPage() {
  const [activeEvent, setActiveEvent] = useState(null);

  const handleEventClick = (index) => {
    if (activeEvent === index) {
      setActiveEvent(null);
    } else {
      setActiveEvent(index);
    }
  };

  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 >
          <span style={{fontWeight: "500", fontSize: "2em", color: "white"}}>Our </span>
          <span className="team-heading"><strong className="purple">Events</strong></span>
          <span style={{fontWeight: "500", fontSize: "2em"}}> 🚀</span>
        </h1>
        <Row>
          
          <div className="event-page-container">
          <Col md = {4}>
            {eventsData.map((event, index) => (
              <Card key={index} className="event-card">
                <Card.Header className="event-card-header">
                  <Button
                    variant="link"
                    className={"event-toggle ${activeEvent === index ? 'active' : ''}"}
                    onClick={() => handleEventClick(index)}
                    aria-controls={`event-details-${index}`}
                    aria-expanded={activeEvent === index}
                  >
                    {event.title}
                  </Button>
                </Card.Header>
                <Collapse in={activeEvent === index}>
                  <div id={`event-details-${index}`}>
                    <Card.Body className="event-card-body">
                      <h3 className="event-card-title">{event.title}</h3>
                      <p><strong>Date:</strong> {event.date}</p>
                      <p><strong>Location:</strong> {event.location}</p>
                      <p className="event-details">{event.details}</p>
                      <Button
                        variant="primary"
                        href={event.registrationLink}
                        target="_blank"
                        className="registration-button"
                      >
                        Register
                      </Button>
                    </Card.Body>
                  </div>
                </Collapse>
              </Card>
            ))}
          </Col>
          </div>
    
        </Row>
      </Container>
    </Container>
      
  );
};

export default EventPage;
