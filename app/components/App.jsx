import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div id="content">

      	<div id="title">
      	  <h1>Countdown</h1>
      	  <h2 className="counter">00:25:00</h2>
      	</div>

      	<div id="buttons">
      		<button id="btnStart">Start</button>
      		<button id="btnStop">Stop</button>
      		<button id="btnReset">Reset</button>
      	</div>

      </div>
    );
  }
}
