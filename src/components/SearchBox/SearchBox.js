import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
// import searchIcon from '../../images/search.svg';

import './SearchBox.css';

class SearchBox extends PureComponent {
  constructor(props) {
    super(props);

    this.state = ({
      searchVal: ''
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      searchVal: e.target.value
    })
  }

  handleClick(e, searchVal) {
    this.props.handleClick(e, this.state.searchVal);
    this.setState({ searchVal: '' });
  }

  render() {
    const { state } = this;

    return (
      <form
        className="form form__search-box"
        noValidate
        onSubmit={e => this.handleClick(e, state.searchVal)}
      >
        <input
          type="text"
          className="input"
          value={state.searchVal}
          onChange={this.handleChange}
          required
        />
        <Button
          classes="btn--search"
          onClick={e => this.handleClick(e, state.searchVal)}
        >
          <Icon name="search" width={22} height={24} />
        </Button>
      </form>
    );
  }
}

SearchBox.displayName = 'SearchBox';

SearchBox.propTypes = {
  handleClick: PropTypes.func
};

SearchBox.defaultProps = {
  handleClick: () => {}
};

function mapStateToProps(state) {
  return {
    id: state.id,
    hasSubmitted: state.hasSubmitted
  }
}

export default connect(mapStateToProps)(SearchBox);