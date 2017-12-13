import React from 'react';
import { Row, Input } from 'react-materialize';

const SearchBar = (props) => {
  return (
    <div>
      <Row>
        <Input s={12} type='select' label='Category' onChange={(e) => { props.updateSearch(e) }} >
          <option value='All'>All</option>
          <option value='Art'>Art</option>
          <option value='Design'>Design</option>
          <option value='Film & Video'>Film & Video</option>
          <option value='Game'>Games</option>
          <option value='Music'>Music</option>
          <option value='Publishing'>Publishing</option>
          <option value='Technology'>Technology</option>
        </Input>
      </Row>
    </div>
  )
}

export default SearchBar;