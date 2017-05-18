const moment = require('moment');
const _ = require('lodash');
const React = require('react');
const ReactDOM = require('react-dom');

class Page1 extends React.Component {
  render() {
    return React.createElement('div', {}, 'Current date: ' + moment().toString() + ', random number: ' + _.random(0, 10000));
  }
}

ReactDOM.render(
  React.createElement(Page1), document.body
);