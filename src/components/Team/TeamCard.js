import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkAlt } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

function TeamCard(props) {
  return (
    <Card className="team-card-view glow-card">
      <Card.Img variant="top" style={{height: "300px" ,objectFit: "cover"}} src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style = {{fontWeight: 'bold'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant = "primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Link" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BiLinkAlt /> &nbsp;
            {"Link"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default TeamCard;
