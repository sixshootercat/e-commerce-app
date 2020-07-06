import React from 'react';
import { useSelector } from 'react-redux';

import MenuItem from 'components/menu-item/MenuItem';
import { selectDirectorySections } from 'redux/selectors/directorySelectors';
// import './directory.scss';
import { DirectoryMenu } from './styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  );
};

export default Directory;
