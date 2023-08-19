
import BackToTopButton from "../BackToTop/BackToTopButton";

import $ from 'jquery';
import React, { useEffect } from 'react';
import 'jquery-ui-dist/jquery-ui';
import { Container, Col, Row } from 'react-bootstrap';
import comingSoon from "../../Assets/ComingSoon.png";
import microsoftLogo from "../../Assets/MicrosoftPage.png";
import { BsPatchQuestion } from "react-icons/bs";
import {IoTimerOutline, IoLocationOutline} from "react-icons/io5";




function EventPage() {

  useEffect(() => {
    // Use jQuery here
    $("#tabs").tabs();
    $("#tabs ul li a").on("click", function() {
      // Remove the 'active' class from all <li> elements
      $("#tabs ul li").removeClass("active");

      // Add the 'active' class to the clicked <li> element
      $(this).parent().addClass("active");
    });
  }, []);


  return (
    <Container fluid className='event-section'>
      <Container>
        <h1 >
          <span style={{fontWeight: "500", fontSize: "2em", color: "white"}} className = "phoneScreenWidth">Our </span>
          <span className="team-heading"><strong className="purple">Events</strong></span>
          <span style={{fontWeight: "500", fontSize: "2em"}}> 🚀</span>
        </h1>
        <div className = "single-services">
          <Row id='tabs'>
            <Col md = {4}>
              <ul>
                <li><a href = "#tabs-1">Upcoming Events</a></li>
                <li><a href = "#tabs-2">MLSA BPPIMT</a></li>

              </ul>
            </Col>
            <Col md = {8}>
              <section className = "tabs-content">
                <article id = "tabs-1">
                  <img src = {comingSoon} alt = "Coming-Soon"/>
                  <h4 style={{fontSize: "2.2rem"}}>Coming Soon..</h4>
                  <p style={{marginBottom: "70px"}}>More events will come soon, stay tuned and make sure to subscribe to our newsletter to get the latest news about our events directly to your mail.
                  <br></br><br></br>
                  Upcoming events are always exciting as they offer a chance to look forward to something new and interesting. Whether it's a tech event, research oriented, conference, or a coding contest as they always offer an amazing experiance. These types of events will provide an opportunity to meet new people, learn new things, and explore new places of domain. With the increasing availability of online events, students have forgotten the essence of meeting other like minded students and professional and interacting them in-person for gaining and sharing their knowledge. Hence, our Student Chapter events aim to helps student start gaining this experiance back. So whether you're looking to expand your knowledge, have some fun, or simply enjoy a new experience, our IEEE events will offer something for everyone. </p>
                  <Container>
                    <Row>
                      <Col md = {6}>
                        <div className="event-agenda">
                          <h2><IoTimerOutline /><b>   When</b></h2>
                          <div className = "event-when">
                            <p>Date: TBD</p>
                            <p>Time: TBD</p>
                            <p>Duration: TBD</p>
                          </div>
                        </div>
                      </Col>
                      <Col md = {6}>
                        <div className = "event-agenda">
                          <h2><BsPatchQuestion /><b>   Where</b></h2>
                            <div className = "event-where">
                              <p>Address: TBD</p>
                              <p>Location: TBD</p>
                            </div>
                        </div>
                      </Col>
                    </Row>
                    <div className = "pt-4">
                      <Col md = {12} lg = {12}>
                        <div id = "map">
                          <h2><IoLocationOutline />    <b>Location</b></h2>
                          <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.6527189839226!2d88.43233301496417!3d22.62944003658474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fe3b109c623%3A0xdfbe090bb9572f78!2sB.%20P.%20Poddar%20Institute%20of%20Management%20and%20Technology!5e0!3m2!1sen!2sin!4v1676569666659!5m2!1sen!2sin" width={"100%"} height={"300px"} style={{border: "0"}} allow="fullscreen" title="BPPIMT-MAP"></iframe>
                        </div>
                      </Col>

                    </div>
                  </Container>
                </article>


                <article id = "tabs-2">
                  <img src = {microsoftLogo} alt = "Coming-Soon"/>
                  <h4 style={{fontSize: "2.2rem"}}>Coming Soon..</h4>
                  <p style={{marginBottom: "70px"}}>More events will come soon, stay tuned and make sure to subscribe to our newsletter to get the latest news about our events directly to your mail.
                  <br></br><br></br>
                  Upcoming events are always exciting as they offer a chance to look forward to something new and interesting. Whether it's a tech event, research oriented, conference, or a coding contest as they always offer an amazing experiance. These types of events will provide an opportunity to meet new people, learn new things, and explore new places of domain. With the increasing availability of online events, students have forgotten the essence of meeting other like minded students and professional and interacting them in-person for gaining and sharing their knowledge. Hence, our Student Chapter events aim to helps student start gaining this experiance back. So whether you're looking to expand your knowledge, have some fun, or simply enjoy a new experience, our IEEE events will offer something for everyone. </p>
                  <Container>
                    <Row>
                      <Col md = {6}>
                        <div className="event-agenda">
                          <h2><IoTimerOutline /><b>   When</b></h2>
                          <div className = "event-when">
                            <p>Date: TBD</p>
                            <p>Time: TBD</p>
                            <p>Duration: TBD</p>
                          </div>
                        </div>
                      </Col>
                      <Col md = {6}>
                        <div className = "event-agenda">
                          <h2><BsPatchQuestion /><b>   Where</b></h2>
                            <div className = "event-where">
                              <p>Address: TBD</p>
                              <p>Location: TBD</p>
                            </div>
                        </div>
                      </Col>
                    </Row>
                    
                  </Container>
                </article>
              </section>
            </Col>
                
          </Row>
        </div>
      </Container>
      <BackToTopButton/>
    </Container>
      
  );
};

export default EventPage;
