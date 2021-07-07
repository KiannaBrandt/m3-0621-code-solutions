import React from 'react';
import ReactDOM from 'react-dom';
class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const isToggleOn = this.state.isToggleOn;
    let toggleStyle = {
      backgroundColor: "#e2e2e2"
    };
    if (!isToggleOn) {
      toggleStyle = {
        backgroundColor: "#6aa74f"
      }
    }
    return (
      <label className="switch">
        <input type="checkbox" onClick={this.handleClick}/>
        <div className="slider" style={toggleStyle}>
          <p className="on-off">{this.state.isToggleOn ? 'OFF' : 'ON'}</p>
        </div>
      </label>
    )
  }
}

ReactDOM.render(
  <ToggleSwitch />,
  document.querySelector('#root')
);


export default ToggleSwitch;
