import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SupportProjectForm from '../SupportProjectForm/SupportProjectForm';
import './ProjectContent.css';

let contentStyle = {
  marginTop: '40px'
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProjectContent = (props) => {

  let progressBarStyle = props.project ?
    { width: `${props.project.currentFunding / props.project.fundingGoal * 100}%` }
    :
    null;

  let project = props.project ?
    <div>
      <div className='row'>
        <div className='col s3'>
          <div>{props.project.owner}</div>
        </div>
        <div className='col s9 left-align'>
          <h1>{props.project.title}</h1>
          <h4>{props.project.subtitle}</h4>
        </div>
      </div>
      <div className='row'>
        <div className='col s8'>
          <img src={props.project.images} style={{ width: '100%' }} alt='' />
        </div>
        <div className='col s4'>
          <div className='progress'>
            <div className='determinate' style={progressBarStyle}></div>
          </div>
          <h6 className='left-align' style={contentStyle}>${numberWithCommas(props.project.currentFunding)}</h6>
          <h5 style={contentStyle}>${numberWithCommas(props.project.fundingGoal)}</h5>
          <h6 style={contentStyle}>{props.project.fundingDuration} Days to go</h6>
          <Collapsible>
            <CollapsibleItem header='Support This Project' >
              <SupportProjectForm
                {...props}
                user={props.user}
                project={props.project}
                handleSupportProjectForm={props.handleSupportProjectForm}
              />
            </CollapsibleItem>
          </Collapsible>
        </div>
      </div>
      <div className='row'>
        <p style={{ textAlign: 'justify' }}>{props.project.description}</p>
      </div>
    </div>
    :
    <h1>Loading</h1>

  return (
    <div className='container'>
      {project}
    </div>
  )
}

export default ProjectContent;