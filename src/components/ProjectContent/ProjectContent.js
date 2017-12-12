import React from 'react';

const ProjectContent = (props) => {
  let project = null;
  project = props.project ? props.project[0] : null;
  return (
    <div className='container'>
      <div className='row'>
        <div className='col s2'>
          {project.owner}
        </div>
        <div className='col s10'>
          <h3>{project.title}</h3>
          <h5>{project.subtitle}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col s8'>
          <img src={project.images[0]} style={{width: '100%'}}/>
        </div>
        <div className='col s4'>
          <div className='progress'>
            <div className='determinate' style={{width: '50%'}}></div>
          </div>
          <h6>{project.currentFunding}</h6>
          <h5>${project.fundingGoal}</h5>
          <h6>{project.fundingDuration} Days to go</h6>
          <button>Back This Project</button>
        </div>
      </div>
      <div className='row'>
        <p style={{textAlign: 'justify'}}>{project.description}</p>
      </div>
    </div>
  )
}

export default ProjectContent;