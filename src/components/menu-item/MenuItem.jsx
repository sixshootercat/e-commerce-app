import React from 'react';
import './menu-item.scss';
import { useRouteMatch, useHistory } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
};
export default MenuItem;
