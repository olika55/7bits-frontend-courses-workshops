import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getItemList from '../../actions/itemList/getItemList';
import whoami from '../../actions/user/whoami';

import './style.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      itemList: []
    };
  };

  componentDidMount() {
    if (!this.props.authorized) {
      this.props.history.replace('/login');
    }

    this.props.whoami();
    this.props.getItemList();
  }

  componentDidUpdate() {
    if (!this.props.authorized) {
      this.props.history.replace('/login');
    }
  }

  renderList = () => {
    const items = this.props.itemList.map((item) => {
      return (
        <li key={item.id} className='list__item'>
          {item.text}
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
        {this.renderList()}
      </React.Fragment>
    );
  };
}

const mapDispatchToProps = (dispatch) => ({
  getItemList: bindActionCreators(getItemList, dispatch),
  whoami: bindActionCreators(whoami, dispatch)
});

const mapStateToProps = (state) => ({
  itemList: state.itemListReducer.itemList,
  authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
