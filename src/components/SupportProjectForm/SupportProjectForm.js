import React from 'react';

const SupportProjectForm = (props) => {

  let donation = props.donation ? props.donation : 0;

  let button = <h1>Loading</h1>
  button = (props.user) ?
    <button type='submit' className='btn'>Continue</button>
    :
    <button type='submit' className='btn' disabled>Continue</button>

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <div className='row'>
            <div className='range-field'>
              <input type='range' min='0' max='1000' defaultValue='0' onChange={(e) => props.handleChange('donation', e)} />
              <div><h5>I pledge to contribute ${donation} to this project.</h5></div>
            </div>
          </div>
          <div className='center'>
            {button}
          </div>
        </div>
      </form>
    </div>
  )
}

export default SupportProjectForm;