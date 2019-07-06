import './scss/Answer.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

class Answer extends Component {
  renderAnswer = () => {
    if (!Object.keys(this.props.answer).length) {
      return null;
    }
    return <img src={this.props.answer.image} alt={this.props.answer.answer}/>;
  };

  render() {
    return (<div className="answer">
      {this.renderAnswer()}
    </div>);
  }
}

const mapStateToProps = state => {
  return {answer: state.answer}
};

export default connect(mapStateToProps)(Answer);
