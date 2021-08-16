import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({title , id , items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title"> {title}</h1>
            <div className="preview">
                {
                    items
                    .filter((item , idx) => idx<4)
                    .map(item => (
                        <CollectionItem key={id} name={item.name} price={item.price} imageUrl={item.imageUrl} />
                    ))
                }
            </div>
        </div>

    )
}   

export default CollectionPreview;
