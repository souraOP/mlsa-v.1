import { Container, Row, Col} from "react-bootstrap";

import soura from "../../Assets/Projects/soura1.jpg";
import subrata from "../../Assets/Projects/subratabhuin.png";
import ankita from "../../Assets/Projects/ankita.png"

import ProjCard from "./ProjectCards";


function Project() {
  
  
  return (
      <Container fluid className="project-section">
        
        <Container>
          <h1>
          <span style={{fontWeight: "500", fontSize: "2em", color: "white"}} className = "phoneScreenWidth">Our </span>
          <span className="project-heading"><strong className="purple">Projects</strong></span>
          <span style={{fontSize: "2em"}}> 👨🏾‍💻</span>
          </h1>
          <Row>
            <Col md = {4} className="project-card">
              <ProjCard 
                projImg = {soura}
                projDate = "March 20 2019"
                projTitle = "Chatbot"
                projText = "Suourer baccha"
              />
            </Col>
            <Col md = {4} className="project-card">
              <ProjCard 
                  projImg = {subrata}
                  projTitle = "Chatbot"
                  projText = "Suourer baccha"
                />
            </Col>
            <Col md = {4} className="project-card">
                <ProjCard 
                  projImg = {ankita}
                  projTitle = "Chatbot"
                  projText = "Suourer baccha"
                />
            </Col>

          </Row>
        
        </Container>
      </Container>
  );
}

export default Project;
