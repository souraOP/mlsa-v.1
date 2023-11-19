import { Container, Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import BackToTopButton from "../BackToTop/BackToTopButton";


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
          <Col md = {4}>
              <ProjectCard 
                projectImage = {"https://cdn.statically.io/gh/souraOP/pic_assests/main/MLSA-BPPIMT/EmoMusic.png"}
                projectName = "EmoMusic"
                projectDescription = "The Emotion-Based Music Recommender Website provides personalized music recommendations based on user's emotions."
                projectLink = "https://github.com/Subhraneel77/EmoMusic"
                projectDate = "3rd August 2023"
                projectMakerImg = {"https://cdn.statically.io/gh/souraOP/pic_assests/main/MLSA-BPPIMT/Shubraneel.png"}
                projectMakerName = "Subhraneel Halder"
              />
            </Col>
            <Col md = {4}>
              <ProjectCard 
                projectImage = {"https://cdn.statically.io/gh/souraOP/pic_assests/main/MLSA-BPPIMT/gdriveDownloader.png"}
                projectName = "Gdrive PDF Downloader"
                projectDescription = "Download PDFs or Images that are uploaded to google drive and have no access to download them."
                projectLink = "https://github.com/souraOP/gdrive-pdf-downloader"
                projectDate = "19th March 2023"
                projectMakerImg = {"https://cdn.statically.io/gh/souraOP/pic_assests/main/MLSA-BPPIMT/soura1.jpg"}
                projectMakerName = "Sourasish Mondal"
              />
            </Col>
            <Col md = {4}>
              <ProjectCard 
                projectImage = {"https://cdn.statically.io/gh/souraOP/pic_assests/main/MLSA-BPPIMT/techflash.png"}
                projectName = "Tech-Flash"
                projectDescription = "A Blogging Page for Tech Learner made using HTML, CSS, Tailwind CSS and JavaScript. Site is still under construction"
                projectLink = "https://subrata2003.github.io/Tech-Flash/"
                projectDate = "24th December 2022"
                projectMakerImg = {"https://cdn.statically.io/gh/souraOP/pic_assests/main/MLSA-BPPIMT/subratabhuin.png"}
                projectMakerName = "Subrata Bhuin"
              />
            </Col>
            <div className = "blob"></div>

            
          </Row>
        </Container>
        <BackToTopButton />
      </Container>
  );
}

export default Project;
