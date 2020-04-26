import React from 'react';
import './collections-overview.scss';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from 'redux/selectors/shopSelectors';

import CollectionPreview from 'components/collection-preview/CollectionPreview';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
