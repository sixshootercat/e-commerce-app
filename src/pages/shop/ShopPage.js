import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop.scss';

import { fetchCollectionsStartAsync } from '../../redux/actions/shopActions';

import CollectionOverviewContainer from '../../components/collections-overview/CollectionOverviewContainer';
import CollectionPageContainer from '../../pages/collection/CollectionPageContainer';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
