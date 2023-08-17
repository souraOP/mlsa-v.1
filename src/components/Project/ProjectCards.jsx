import React from "react";
import {FiChevronRight} from "react-icons/fi";

class CardHeader extends React.Component {
    render() {
      const { image } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} id={image} className="proj-card-header">
          {/* <h4 className="proj-card-header--title">News</h4> */}
        </header>
      )
    }
}
  
class Button extends React.Component {
    render() {
      return (
        <button className="button proj-button-primary">
          <FiChevronRight style={{paddingRight: "4px"}}/> Find out more
        </button>
      )
    }
}
  
class CardBody extends React.Component {
    render() {
      return (
        <div className="proj-card-body">
            <p className="proj-date">{this.props.date}</p>
          
            <h2>{this.props.title}</h2>
          
            <p className="proj-body-content">{this.props.text}</p>
          
          <Button />
        </div>
      )
    }
}

class ProjCard extends React.Component {
    render() {
      return (
        <article className="proj-card glow-card">
          <CardHeader image={this.props.projImg}/>
          <CardBody date = {this.props.projDate} title={this.props.projTitle} text={this.props.projText}/>
        </article>
      )
    }
}


export default ProjCard;

  