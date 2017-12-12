import React from 'react';
import {Modal, Button} from 'react-materialize';
import SupportProjectForm from '../SupportProjectForm/SupportProjectForm';

let contentStyle = {
  marginTop: '40px'
}

const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProjectContent = (props) => {

  let project = props.project ?
    <div>
      <div className='row'>
        <div className='col s3'>
          <div>{props.project[0].owner}</div>
        </div>
        <div className='col s9 left-align'>
          <h2>{props.project[0].title}</h2>
          <h5>{props.project[0].subtitle}</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col s8'>
          <img src={props.project[0].images[0]} style={{ width: '100%' }} alt=''/>
        </div>
        <div className='col s4'>
          <div className='progress'>
            <div className='determinate' style={{ width: '50%' }}></div>
          </div>
          <h6 className='left-align' style={contentStyle}>${numberWithCommas(props.project[0].currentFunding)}</h6>
          <h5 style={contentStyle}>${numberWithCommas(props.project[0].fundingGoal)}</h5>
          <h6 style={contentStyle}>{props.project[0].fundingDuration} Days to go</h6>
          <Modal header='Support This Project' trigger={<Button>Back this project</Button>}>
            <SupportProjectForm
              {...props} 
              user={props.user}
              project={props.project}
            />
          </Modal>
        </div>
      </div>
      <div className='row'>
        <p style={{ textAlign: 'justify' }}>{props.project[0].description}</p>
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