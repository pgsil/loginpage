import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import updateLogin from './services/login/actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.timeout = null;
  }

  componentDidMount() {}

  debounce(fn) {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      fn();
    }, 350);
  }

  render() {
    return <span>Hello world!</span>;
  }
}

const mapStateToProps = ({ login }, ownProps) =>
  Object.assign(
    {},
    {
      login,
    },
    ownProps,
  );

const mapDispatchToProps = dispatch => bindActionCreators({ updateLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
