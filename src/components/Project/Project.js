import React from 'react';

const Project = (props) => {

  return (
    <div>
      {props.projects ? <h1>{props.projects[0].title}</h1> : <h1>Loading</h1>}
    </div>
  )
}

export default Project;