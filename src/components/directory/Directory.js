import React from 'react';
import { useSelector } from 'react-redux';
import './directory.scss';
import MenuItem from '../../components/menu-item/MenuItem';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className='directory-menu'>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
