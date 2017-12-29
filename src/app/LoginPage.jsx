import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from './components/Input';
import PasswordInput from './components/PasswordInput';
import Brand from './components/Brand';

import { updatePasswordConfirmation, updateEmail, updateName } from './services/login/actions';

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
          <form autoComplete="on" method="POST">
            <div className="login-inputs">
              <Input
                label="Nome completo"
                autocomplete="name"
                onChange={{
                  fn: this.props.updateName,
                  args: [null],
                }}
                validInput={this.props.login.validName}
                inputValue={this.props.login.name}
              />
              <Input
                label="E-mail"
                type="email"
                onChange={{
                  fn: this.props.updateEmail,
                  args: [null],
                }}
                validInput={this.props.login.validEmail}
                inputValue={this.props.login.email}
                autocomplete="email"
              />
              <PasswordInput label="Senha" />
              <Input
                onChange={{
                  fn: this.props.updatePasswordConfirmation,
                  args: [this.props.login.password.value],
                }}
                type="password"
                label="Confirme sua senha"
                autocomplete="new-password"
                validInput={this.props.login.pwdConfirmed && this.props.login.password.valid}
                inputValue={this.props.login.password.confirmationValue}
              />
              <button
                className="btn"
                id="signup-btn"
                onClick={(e) => {
                  e.preventDefault();

                  const el = document.getElementById('signup-btn');
                  el.classList.add('btn-bounce');
                  setTimeout(() => {
                    el.classList.remove('btn-bounce');
                  }, 200);
                }}
                disabled={
                  !(
                    this.props.login.validName &&
                    this.props.login.validEmail &&
                    this.props.login.password.valid &&
                    this.props.login.pwdConfirmed
                  )
                }
              >
                Criar conta
              </button>
            </div>
          </form>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updatePasswordConfirmation, updateEmail, updateName }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
