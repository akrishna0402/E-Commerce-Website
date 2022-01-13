import React from "react";
import MenuItem from "../menu-item/Menu-Item.component";
import "./directory.styles.scss";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const DirectoryMenu = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ title, id, imageUrl, size, linkUrl }) => {
        return (
          <MenuItem
            title={title.toUpperCase()}
            id={id}
            imageUrl={imageUrl}
            size={size}
            linkUrl={linkUrl}
            key={id}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
