import { Container, Row, Col } from "react-bootstrap";
import TeamCard from "./TeamCard";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
import rajdeep from "../../Assets/ProfilePicture/rajdeep.png";
import subhraneel from "../../Assets/ProfilePicture/Shubraneel.png";
import soura from "../../Assets/ProfilePicture/soura1.jpg";
import subrata from "../../Assets/ProfilePicture/subratabhuin.png";
import uddipan from "../../Assets/ProfilePicture/uddipan.jpeg";
import ankita from "../../Assets/ProfilePicture/ankita.png";
import tanusree from "../../Assets/ProfilePicture/tanushree.png";
import sayandip from "../../Assets/ProfilePicture/sayandip.png";
import snehashis from "../../Assets/ProfilePicture/snehashis.jpeg";
import BackToTopButton from "../BackToTop/BackToTopButton";
import sayon from "../../Assets/ProfilePicture/sayon.jpg";

function Team() {
  return (
    <Container fluid className="team-section">
      <Particle />

      <Container>
        <h1 >
          <span style={{fontWeight: "500", fontSize: "2em", color: "white"}} className = "phoneScreenWidth">Our </span>
          <span className="team-heading"><strong className="purple">Team</strong></span>
          <span style={{fontWeight: "500", fontSize: "2em"}}> 🚀</span>
          
        </h1>
       
    
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={subhraneel}
                isBlog={false}
                title="Subhraneel Halder"
                description="Lead Ambassador"
                ghLink="https://github.com/Subhraneel77" 
                demoLink = "https://www.linkedin.com/in/subhraneel-778/"

              />
            </Tilt>
          </Col>

          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={subrata}
                isBlog={false}
                title="Subrata Bhuin"
                description="Co-Leader"
                ghLink="https://github.com/Subrata2003"
                demoLink="https://www.linkedin.com/in/subratabhuin8918/"
              />
            </Tilt>
          </Col>

          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={soura}
                isBlog={false}
                title="Sourasish Mondal"
                description = "Web Design Lead"
                ghLink="https://github.com/souraOP"
                demoLink="https://linktr.ee/souraOP"
              />
            </Tilt>
          </Col>

          <Col md={4} className="team-card">
            <Tilt>
            <TeamCard
              imgPath={uddipan}
              isBlog={false}
              title="Uddipan Ghosh"
              description="Design Lead"
              ghLink="https://github.com/BubunOMG"
              demoLink="https://www.linkedin.com/in/uddipan-ghosh-3a3737175/"
            />
            </Tilt>
          </Col>

          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={sayandip}
                isBlog={false}
                title="Sayandip Bhattacharya"
                description="Technical Lead"
                ghLink="https://github.com/Sayandip2023"
                demoLink="https://www.linkedin.com/in/sayandip-bhattacharyya-0b6797238/"
              />
            </Tilt>
          </Col>

          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={ankita}
                isBlog={false}
                title="Ankita Dutta"
                description="Treasurer"
                ghLink="https://github.com/ankitaXdutta"
                demoLink="https://www.linkedin.com/in/ankita-dutta007/"              
              />
            </Tilt>
          </Col>

        
          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={rajdeep}
                isBlog={false}
                title="Rajdeep Basak"
                description="Social Media Lead"
                ghLink="https://github.com/Rajdeep-Codes"
                demoLink="https://linktr.ee/rajdeep.basak"
              />
            </Tilt>
          </Col>
          
          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={sayon}
                isBlog={false}
                title="Sayon Das"
                description="N/A"
                ghLink="https://github.com/SAYON1O1"
                demoLink="https://www.linkedin.com/in/sayon-das-aa21b3127/"
              />
            </Tilt>
          </Col>
          <Col md={4} className="team-card">
            <Tilt>
              <TeamCard
                imgPath={tanusree}
                isBlog={false}
                title="Tanushree Saha"
                description="Outreach Lead"
                ghLink="https://github.com/TanushreeSaha03"
                demoLink="https://www.linkedin.com/in/tanushree-saha-893290222" 
              />
            </Tilt>
          </Col>
          <Col md={4} className="team-card">
          <Tilt>
              <TeamCard
                imgPath={snehashis}
                isBlog={false}
                title="Snehashis Paul"
                description="N/A"
                ghLink=""
                demoLink="https://www.linkedin.com/in/snehashis-paul-356226245"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <BackToTopButton />
    </Container>
  );
}

export default Team;
