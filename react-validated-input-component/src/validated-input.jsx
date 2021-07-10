import React from 'react';
import ReactDOM from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    console.log('state:', this.state.password)
    let passwordInput = this.state.password;
    let passwordLength = passwordInput.length;
    let passwordClass
    let passwordText
    if (passwordLength === 0) {
      passwordClass = "fas fa-times"
      passwordText = "A password is required."
    }
    if ((passwordLength < 8) && (passwordLength > 0)) {
      passwordClass = "fas fa-times"
      passwordText = "Your password is too short."
    }
    if (passwordLength >= 8) {
      passwordClass = "fas fa-check"
      passwordText = ""
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Password</label>
        <input type="password" value={this.state.password} onChange={this.handleChange} />
        <i className={passwordClass}></i>
        <p>{passwordText}</p>
      </form>
    );
  }
}

ReactDOM.render(
  <ValidatedInput />,
  document.querySelector('#root')
);

export default ValidatedInput;
