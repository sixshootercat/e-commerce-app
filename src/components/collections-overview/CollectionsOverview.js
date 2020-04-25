import React from 'react';
import './collections-overview.scss';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/selectors/shopSelectors';

import CollectionPreview from '../collection-preview/CollectionPreview';

<<<<<<< HEAD
const CollectionsOverview = ({ collections }) => {
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
=======
const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);
>>>>>>> hooks-refactoring

  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
