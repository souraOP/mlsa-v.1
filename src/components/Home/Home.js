import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Micro.png";
import MicroLogo from "../../Assets/logo.png";
import BackToTopButton from "../BackToTop/BackToTopButton";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome to
                <strong className="main-name"> MLSA-BPPIMT</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20}}>
              <img
                src={homeLogo}
                alt="home pic"
                className="myAvtar"
                style={{ maxWidth: "500em" }}
              />
            </Col>
            <Col md = {12} >
              <h1 className="text-center mb-5 home-heading phoneScreenWidth">
                About <strong className="purple">MLSA</strong>
              </h1>
            </Col>
          </Row>
          <Row>
            <div className = "upper-layer glow-card">
              <Row > 
                <Col md = {5}>
                  <img 
                    src = {MicroLogo} 
                    style={{width: "80%", objectFit: "contain"}}
                    alt= "MLSA-Logo"
                    className = "upper-layer-img"
                  />
                </Col>
                <Col md = {7}  className = "card-description">
                  <p>Led by Microsoft Learn Student Ambassadors, our technical club Microsoft Learn Student Ambassadors BPPIMT focuses on lighting a fire under zealous and spirited thinkers. Starting years back, we've been committed to serving the community. We regularly conduct events, organize workshops, technical talks, webinars, build community projects to develop young minds, and help them recognize and uncover their potential, under the esteemed name of the organization, to carry forth and express its legacy.
                  </p>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
        
      </Container>
      <BackToTopButton />
      
    </section>
    
  );
}

export default Home;
