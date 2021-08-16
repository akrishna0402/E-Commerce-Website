import React from 'react';
import CollectionPreview from '../../Components/collection-preview.component/collection-preview.component';
import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collections : SHOP_DATA 
        } ;
    }

    render(){
        const {collections} = this.state;
        return(
            <div className="shop-page">
                {
                    collections.map(({id , title , items}) => (
                        <CollectionPreview id={id} title={title} items={items} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage;