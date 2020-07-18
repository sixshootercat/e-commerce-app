import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCollectionsStart } from 'redux/actions/shopActions';
import CollectionOverviewContainer from 'containers/CollectionOverviewContainer';
import CollectionPageContainer from 'containers/CollectionPageContainer';

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </>
  );
};

export default ShopPage;
