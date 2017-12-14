import React from 'react';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';

const NewProjectPage = (props) => {
  return (
    <div>
      <NewProjectForm 
        {...props}
        user={props.user}
        handleNewProjectForm={props.handleNewProjectForm}        
      />
    </div>
  )
}

export default NewProjectPage;