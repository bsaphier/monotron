import React, { Component } from 'react';
import MonotronContainer from './MonotronContainer.js';

export default class AppContainer extends Component {
  render () {
    return (
      <div className="container-fluid">
        <div className="container text-center">
          <MonotronContainer />
        </div>
        <canvas data-nx="typewriter"></canvas>
      </div>
    );
  }
}
