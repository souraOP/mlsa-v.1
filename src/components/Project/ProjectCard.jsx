
function ProjectCard(props){
    return (
        <div className="nft">
            <div className = "main-card">
                <img className = "tokenImage" src = {props.projectImage} alt="project-img" />
                <h2>{props.projectName}</h2>
                <p className="proj-description">{props.projectDescription}</p>
                <div className = "tokenInfo">
                <div className = "price">
                    <p><ins>🔗</ins><a href={props.projectLink} style={{textDecoration: "none"}}>Link</a></p>
                </div>
                <div className="duration">
                    
                    <p><ins>🕰️</ins>{props.projectDate}</p>
                </div>
                </div>
                <hr></hr>
                <div className = "creator">
                <div className = "wrapper">
                    <img src={props.projectMakerImg} alt="Creator" />  
                </div>
                <p><ins>Created by</ins> {props.projectMakerName}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;