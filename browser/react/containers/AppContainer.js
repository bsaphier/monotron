import React, { Component } from 'react';

/* ---> mount the UI controls <--- */
import '../../../bin';

/* ---> react components <--- */
import MonotronContainer from './MonotronContainer.js';


export default class AppContainer extends Component {
  constructor () {
    super();
    this.state = {
      display: 'monotron'
    };
  }
  render () {
    return (
      <div className="container-fluid">
        <MonotronContainer />
      </div>
    );
  }
}
