import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getItemList from '../../actions/itemList/getItemList';

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
    this.props.getItemList();
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
  getItemList: bindActionCreators(getItemList, dispatch)
});

const mapStateToProps = (state) => ({
  itemList: state.itemListReducer.itemList
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
