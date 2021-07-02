import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 })
  }
  render() {
    const clickCount = this.state.counter;
    let buttonStyle = {
      backgroundColor: "#000000"
    };
    if (clickCount >= 3) {
      buttonStyle = {
        backgroundColor: "#361c75"
      }
    } if (clickCount >= 6) {
      buttonStyle = {
        backgroundColor: "#674ea7"
      }
    } if (clickCount >= 9) {
      buttonStyle = {
        backgroundColor: "#e06666"
      }
    } if (clickCount >= 12) {
      buttonStyle = {
        backgroundColor: "#f6b26b",
        color: "#000000"
      }
    } if (clickCount >= 15) {
      buttonStyle = {
        backgroundColor: "#ffff00",
        color: "#000000"
      }
    } if (clickCount >= 18) {
      buttonStyle = {
        backgroundColor: "#ffffff",
        color: "#000000"
      }
    }
    return <button style={buttonStyle} onClick={this.handleClick}>Hot Button</button>
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
