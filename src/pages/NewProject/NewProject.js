import React, {Component} from 'react';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';

const NewProject = (props) => {
  return (
    <div>
      <NewProjectForm 
        {...props}
      />
    </div>
  )
}

export default NewProject;