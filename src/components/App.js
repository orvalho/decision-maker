import './scss/App.scss';

import React from 'react';

import Search from './Search';
import Answer from './Answer';

export default() => {
  return (<div className="app">
    <h1>Any decision is better than no decision</h1>
    <Search/>
    <Answer/>
  </div>);
}
