import React from 'react';
import ReactDOM from 'react-dom';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {accordionOpen: false};
    this.openAccordion = this.openAccordion.bind(this);
    this.closeAccordion = this.closeAccordion.bind(this);
    this.setStyle = this.setStyle.bind(this);
  }

  openAccordion(props) {
    this.setState({ accordionOpen: true });
  }

  closeAccordion(props) {
    this.setState({ accordionOpen: false });
  }

  setStyle(props) {
    let paragraphStyle;
    if (this.state.accordionOpen === false) {
      paragraphStyle = {
        display: "none"
      }
    } else {
      paragraphStyle = {
        display: null
      }
    }
    return { paragraphStyle: paragraphStyle }
  }

  render() {
    const style = this.setStyle();

  };

};

export default Accordion;
