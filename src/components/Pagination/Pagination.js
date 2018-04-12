import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../actions/index';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import './Pagination.css';

class Pagination extends PureComponent {
  getPage(val) {
    this.props.fetchSearchResults(this.props.searchVal, val);
    window.scrollTo(0, 0);
  }

  render() {
    const {props} = this;

    return (
      <ul className="pagination">
        <li>
          <Button
            classes="btn--pagination btn-pagination--prev"
            disabled={props.currentPage === 1 ? true : false}
            onClick={() => this.getPage(props.currentPage - 1)}
          >
            <Icon name="arrowRight" width={20} />
          </Button>
        </li>
        <li>
          <Button
            classes="btn btn--pagination btn-pagination--next"
            disabled={props.currentPage === props.total_pages ? true : false}
            onClick={() => this.getPage(props.currentPage + 1)}
          >
            <Icon name="arrowRight" width={20} />
          </Button>
        </li>
      </ul>
    );
  }
}

Pagination.displayName = 'Pagination';

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    filmSearch: state.filmSearch,
    searchVal: state.searchVal
  }
}

export default connect(mapStateToProps, {fetchSearchResults})(Pagination);

