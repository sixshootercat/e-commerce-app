import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCollection,
  selectIsCollectionsLoaded,
} from 'redux/selectors/shopSelectors';
import './collection.scss';
import CollectionItem from 'components/collection-item/CollectionItem';
import Spinner from 'components/spinner/Spinner';

const CollectionPage = ({ match }) => {
  const isLoaded = useSelector(selectIsCollectionsLoaded);
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;

  return (
    <>
      {!isLoaded ? (
        <Spinner />
      ) : (
        <div className='collection-page'>
          <h2 className='title'>{title}</h2>
          <div className='items'>
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CollectionPage;
