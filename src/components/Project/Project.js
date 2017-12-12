import React from 'react';

const Project = (props) => {
  let project = props.projects ?
    props.projects.map((project, idx) => (
      <div className='row'>
        <div className='col s6'>
          <div className='card'>
            <div className='card-image'>
              <img src={project.images[0]} alt=""/>
              <span className='card-title'><p>{project.title}</p></span>
            </div>
            <div className='card-content'>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))
    :
    <h1>Loading</h1>

  return (
    <div>
      <div className='container'>
        {project}
      </div>
    </div>
  )
}

export default Project;