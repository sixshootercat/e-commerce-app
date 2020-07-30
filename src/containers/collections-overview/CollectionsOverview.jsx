import React from 'react';
import './collections-overview.scss';
import { useSelector } from 'react-redux';
import {
  selectCollectionsForPreview,
  selectIsCollectionsLoaded,
} from 'redux/selectors/shopSelectors';
import Spinner from 'components/spinner/Spinner';

import CollectionPreview from 'containers/collection-preview/CollectionPreview';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
  const isLoaded = useSelector(selectIsCollectionsLoaded);

  return (
    <>
      {!isLoaded ? (
        <Spinner />
      ) : (
        <div className='collections-overview'>
          {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
        </div>
      )}
    </>
  );
};

export default CollectionsOverview;
