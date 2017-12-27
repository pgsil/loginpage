import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from './components/Input';
import PasswordInput from './components/PasswordInput';
import Brand from './components/Brand';

import { updateLogin } from './services/login/actions';

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
    return (
      <section className="login-page">
        <div className="login-wrapper">
          <div className="login-header">
            <Brand />
            <h1 className="create-account">Crie sua conta</h1>
          </div>
          <div className="login-inputs">
            <Input label="Nome completo" />
            <Input label="E-mail" />
            <PasswordInput label="Senha" />
          </div>
        </div>
      </section>
    );
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
