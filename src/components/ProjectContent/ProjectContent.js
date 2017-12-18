import React from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import SupportProjectForm from '../SupportProjectForm/SupportProjectForm';
import './ProjectContent.css';

const ProjectContent = (props) => {

  let progressBarStyle = props.project ?
    { width: `${props.project.currentFunding / props.project.fundingGoal * 100}%` }
    :
    null;

  let daysRemaining = props.project ? props.project.fundingDuration - props.calcDateDiff(props.project.createdAt) : 0
  daysRemaining = daysRemaining > 0 ?
    <div>
      <h4 className='left-align' style={{ fontWeight: 'bold' }}>{props.numberWithCommas(daysRemaining)}</h4>
      <h6 className='left-align' style={{ margin: '-10px 0px 20px' }}>Days to go</h6>
      <Collapsible>
        <CollapsibleItem header='Support This Project' >
          <SupportProjectForm
            {...props}
            user={props.user}
            project={props.project}
            donation={props.donation}
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
        </CollapsibleItem>
      </Collapsible>
    </div>
    :
    <h4>Funding for this project has ended.</h4>

  let project = props.project ?
    <div>
      <div className='row'>
        <div className='col s3'>
          <div className='left-align'><img className='avatar' src={props.project.owner.avatar} width='50px' height='50px' alt=''/></div>
          <div className='left-align'>By {props.project.owner.name}</div>
        </div>
        <div className='col s9 left-align'>
          <h2 style={{ fontWeight: 'bold' }}>{props.project.title}</h2>
          <h5>{props.project.subtitle}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col s8'>
          <img src={props.project.images} style={{ width: '100%' }} alt='' />
          <h6 className='left-align'>Category: {props.project.category}</h6>
        </div>
        <div className='col s4'>
          <div className='progress'>
            <div className='determinate' style={progressBarStyle}></div>
          </div>
          <h4 className='left-align' style={{ fontWeight: 'bold' }}>${props.numberWithCommas(props.project.currentFunding)}</h4>
          <h6 className='left-align'>pledged of ${props.numberWithCommas(props.project.fundingGoal)} goal</h6>
          <h4 className='left-align' style={{ fontWeight: 'bold' }}>{props.numberWithCommas(props.project.backers.length)}</h4>
          <h6 className='left-align' style={{ marginTop: '-10px' }}>Backers</h6>
          {daysRemaining}
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