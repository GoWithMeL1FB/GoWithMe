import React, { Component } from 'react';
import { Icon } from 'react-materialize';
import axios from 'axios';

class Search extends Component {
  render() {
    return (
      <form>
        <div className='input-field'>
          <input id='search' type='search' required />
          <label htmlFor='search'><Icon>search</Icon></label>
          <Icon>close</Icon>
        </div>
      </form>
    )
  }
}

export default Search;