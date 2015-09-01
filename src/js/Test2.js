'use babel';

import React, {PropTypes, Component} from 'react';
import {AppCanvas, AppBar,  RaisedButton} from 'material-ui';
import Router, {RouteHandler} from 'react-router';

export default class Test2 extends Component {
  goto3() {
    this.context.router.transitionTo('test3');
  }

  render() {
    return (
      <div>
        <p>Test page 2<RaisedButton onTouchTap={this.goto3.bind(this)} label='Test 3'/></p>

        <RouteHandler />
      </div>
    );
  }
}

Test2.contextTypes = {
  router: PropTypes.func
}
