import React from 'react';
import { connect } from 'react-redux';

import Button from '../../components/button/Button';
import FormField from '../../components/formField/FormField';

import './style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: []
    };
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      itemList: [
        ...this.state.itemList,
        this.state.value
      ],
      value: ''
    });
  };

  renderList = () => {
    const items = this.state.itemList.map((item, index) => {
      return (
        <li key={index} className='list__item'>
          {index}. {item}
        </li>
      );
    });

    return (
      <ul className={'home__list list'}>
        {items}
      </ul>
    );
  };

  render() {
    return (
      <React.Fragment>
        <form
          className='form'
          onSubmit={this.handleSubmit}
        >
          <FormField
            className='form__field'
            value={this.state.value}
            placeholder='Какое-то значение'
            onChange={this.handleChange}
          />
          <Button
            className='form__button'
            type='submit'
            value='Добавить'
            disabled={this.state.value.length === 0}
          />
        </form>
        {this.renderList()}
      </React.Fragment>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
