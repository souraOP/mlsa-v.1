import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Made By <a href = "https://linktr.ee/souraOP" target = "_blank" rel="noreferrer" style={{textDecoration: "none"}}>Sourasish Mondal</a></h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>© {year} Microsoft Learn Student Ambassadors-BPPIMT</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://instagram.com/mlsa_bppimt?igshid=ZGUzMzM3NWJiOQ=="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/mlsa_bppimt?igshid=ZGUzMzM3NWJiOQ=="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/mlsa_bppimt?igshid=ZGUzMzM3NWJiOQ=="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    
  );
}

export default Footer;
