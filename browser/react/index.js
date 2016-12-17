import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
// 
// class CanvasComp extends React.Component {
//   render() {
//     return (
//       <canvas data-nx="keyboard"></canvas>
//     );
//   }
// }

ReactDOM.render(
  <div>
    <AppContainer />
  </div>,
  document.getElementById('app')
);
