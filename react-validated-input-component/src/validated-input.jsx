import React from 'react';
import ReactDOM from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  validate() {
    let passwordLength = this.state.password.length;
    let passwordClass;
    let passwordText;
    if (passwordLength === 0) {
      passwordClass = "icon-red fas fa-times"
      passwordText = "A password is required."
    }
    if ((passwordLength < 8) && (passwordLength > 0)) {
      passwordClass = "icon-red fas fa-times"
      passwordText = "Your password is too short."
    }
    if (passwordLength >= 8) {
      passwordClass = "icon-green fas fa-check"
      passwordText = ""
    }
    return {passwordClass: passwordClass, passwordText: passwordText};
  }

  render() {
    const passwordInfo = this.validate();

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Password</label>
        <input type="password" value={this.state.password} onChange={this.handleChange} />
        <i className={passwordInfo.passwordClass}></i>
        <p>{passwordInfo.passwordText}</p>
      </form>
    );
  }
}

export default ValidatedInput;
