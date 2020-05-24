import React, { useEffect } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchCollectionsStart } from 'redux/actions/shopActions';

import CollectionOverviewContainer from 'hoc/CollectionOverviewContainer';
import CollectionPageContainer from 'hoc/CollectionPageContainer';

const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, []);

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
