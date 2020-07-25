import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollection } from 'redux/selectors/shopSelectors';
import './collection.scss';
import CollectionItem from 'components/collection-item/CollectionItem';

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;