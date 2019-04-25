import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormField from '../../components/formField/FormField';
import Button from '../../components/button/Button';

import login from '../../actions/user/login';

import './style.css';

class Login extends React.Component {
  componentDidMount() {
    if (this.props.authorized) {
      this.props.history.replace('/');
    }
  }

  componentDidUpdate() {
    if (this.props.authorized) {
      this.props.history.replace('/');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const username = event.target['login'].value;
    const password = event.target['password'].value;

    this.props.login(username, password);
  };

  render() {
    return (
      <form
        className='login-form'
        onSubmit={this.handleSubmit}
      >
        <FormField
          className='login-form__field'
          name='login'
          placeholder='Логин'
        />
        <FormField
          className='login-form__field'
          name='password'
          placeholder='Пароль'
          type='password'
        />
        <Button
          className='login-form__button'
          type='submit'
          value='Авторизоваться'
        />
      </form>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(login, dispatch)
});

const mapStateToProps = (state) => ({
  authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
