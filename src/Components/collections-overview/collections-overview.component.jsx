import React from "react";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../Components/collection-preview.component/collection-preview.component";
import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
