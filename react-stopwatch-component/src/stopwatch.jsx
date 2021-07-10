import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: 0,
      timerOn: false
     }
    this.tick = this.tick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  stopTimer() {
    this.setState({
      timerOn: false
    });
    clearInterval(this.timerID)
  }

  resetTimer() {
    this.setState({
      runningTime: 0
    });
  };

  tick() {
    this.setState({
      timerOn: true,
      runningTime: this.state.runningTime + 1
    });
  }

  render() {
    let stopwatchClass;
    let stopwatchFunction;
    let resetFunction;
    if ((this.state.timerOn === false) && (this.state.runningTime === 0)) {
      stopwatchClass = "fas fa-play";
      stopwatchFunction = this.startTimer;
    }
    if (this.state.timerOn === true) {
      stopwatchClass = "fas fa-pause";
       stopwatchFunction = this.stopTimer;
    }
    if ((this.state.timerOn === false) && (this.state.runningTime > 0)) {
      stopwatchClass = "fas fa-play";
      stopwatchFunction = this.startTimer;
      resetFunction = this.resetTimer;
    }
    return (
      <div className="stopwatch">
        <div className="circle" onClick={resetFunction}>{this.state.runningTime}</div>
        <i className={stopwatchClass} onClick={stopwatchFunction}></i>
      </div>
    );
  }
}

ReactDOM.render(
  <Stopwatch />,
  document.querySelector('#root')
)

export default Stopwatch;
