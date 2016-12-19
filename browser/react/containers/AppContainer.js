'use strict';
import React, { Component } from 'react';
import Monotron from '../components/Monotron.js';

export default class AppContainer extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Monotron />
      </div>
    );
  }
}
