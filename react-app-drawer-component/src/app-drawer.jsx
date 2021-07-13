import React from 'react';
import ReactDOM, { render } from 'react-dom';

class AppDrawer extends React.Component {
  constructor(props) {
  super(props);
  this.state = {modalOpen: false};
  this.openModal = this.openModal.bind(this);
  this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
  this.setState({ modalOpen: false });
  }

  render() {
    let backgroundStyle;
    let iconStyle;
    if (this.state.modalOpen === false) {
      backgroundStyle = {
        display: "none"
      }
      iconStyle = {
        display: null
      }
    } else {
      backgroundStyle = {
        display: null
      }
      iconStyle = {
        display: "none"
      }
    }
    return (
      <div className="modal">
        <i className="icon fas fa-bars" onClick={this.openModal} style={iconStyle}></i>
        <div className="modal-background" onClick={this.closeModal} style={backgroundStyle}>
          <div className="modal-content">
            <p>Menu</p>
            <p onClick={this.closeModal}>About</p>
            <p onClick={this.closeModal}>Get Started</p>
            <p onClick={this.closeModal}>Sign In</p>
          </div>
        </div>
      </div>
    )
  }
}

export default AppDrawer;
