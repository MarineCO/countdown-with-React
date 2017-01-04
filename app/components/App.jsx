import React from 'react';

  	let startTime;
  	let intervalID;
  	let time = 1500;
  	const count = 1;

export default class App extends React.Component {
	
  start() {
  	startTime = time;
  	intervalID = setInterval(() => {

    	const hour = Math.floor(time/3600);
    	const minute = Math.floor((time % 3600)/60);
    	const second = time % 3600 % 60;
    	console.log(second);

    	const timer = time--;

    	console.log(timer);

  	}, 1000);
  }

  render() {
    return (
      <div id="content">

      	<div id="title">
      	  <h1>Countdown</h1>
      	  <h2 className="counter">00:25:00</h2>
      	</div>

      	<div id="buttons">
      		<button id="btnStart" onClick={this.start}>Start</button>
      		<button id="btnStop">Stop</button>
      		<button id="btnReset">Reset</button>
      	</div>

      </div>
    );
  }
}
