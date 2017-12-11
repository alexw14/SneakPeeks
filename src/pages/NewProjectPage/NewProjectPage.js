import React from 'react';
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm';

const NewProjectPage = (props) => {
  return (
    <div>
      <NewProjectForm 
        {...props}
      />
    </div>
  )
}

export default NewProjectPage;