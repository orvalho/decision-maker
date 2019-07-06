import './scss/Search.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class SearchBar extends Component {
  state = {
    input: ''
  };

  handleChange = e => {
    Object.keys(this.props.answer).length && this.props.clearAnswer();
    this.setState({input: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.input.trim()) {
      this.props.fetchAnswer();
      this.setState({input: ''});
    }
  };

  render() {
    return (<div className="search ui segment">
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <input onChange={this.handleChange} value={this.state.input} placeholder="Your question..." autoComplete="off"/>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>);
  }
}

const mapStateToProps = state => {
  return {answer: state.answer}
};

export default connect(mapStateToProps, actions)(SearchBar);
