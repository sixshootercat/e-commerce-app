import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "components/MenuItem";
import { selectDirectorySections } from "redux/selectors/directorySelectors";
import { DirectoryMenu } from "./styles";

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
