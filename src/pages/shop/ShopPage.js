import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './shop.scss';

import { fetchCollectionsStartAsync } from '../../redux/actions/shopActions';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from '../../redux/selectors/shopSelectors';

import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import WithSpinner from '../../components/with-spinner/WithSpinner';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCollectionsStartAsync());
  }

  render() {
    const { match, isCollectionsFetching, isCollectionsLoaded } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionsFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps)(ShopPage);
