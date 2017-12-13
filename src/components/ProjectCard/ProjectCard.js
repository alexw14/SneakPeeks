import React from 'react';
import { Link } from 'react-router-dom';

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProjectCard = (props) => {
  let project = props.project;
  let uri = project.title.replace(/\s/g, "").toLowerCase();
  let percentage = Math.floor(project.currentFunding / project.fundingGoal * 100);

  let backgroundImg = {
    backgroundImage: `url(${project.images[0]})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '150px'
  }

  let progressBarStyle = props.project ?
    { width: `${percentage}%` }
    :
    null;

  let projectCard = props.project ?
    <div className='card' style={{ overflow: 'scroll', height: '400px' }} >
      <div className='card-image'>
        <div style={backgroundImg}></div>
      </div>
      <div className='card-content left-align'>
        <h4 className='flow-text' style={{ fontWeight: 'bold', marginTop:'0' }}>{project.title}</h4>
        <p style={{marginBottom: '20px'}}>{project.subtitle}</p>
        <div className='progress'>
          <div className='determinate' style={progressBarStyle}></div>
        </div>
        <p>${numberWithCommas(project.currentFunding)} pledged</p>
        <p>{percentage}% funded</p>
        <p style={{margin: '10px 0 -10px'}}>Category: {project.category}</p>
      </div>
      <Link to={`/projects/${uri}`}>Explore</Link>
    </div>
    :
    <h1>Loading</h1>

  return (
    <div className='col s4'>
      {projectCard}
    </div>
  )
}

export default ProjectCard;