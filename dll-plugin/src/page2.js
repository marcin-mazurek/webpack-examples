const moment = require('moment');
const React = require('react');
const ReactDOM = require('react-dom');

class Page2 extends React.Component {
  render() {
    return React.createElement('h1', {}, 'Tomorrow\'s date: ' + moment().add('1 day').toString());
  }
}

ReactDOM.render(
  React.createElement(Page2), document.body
);