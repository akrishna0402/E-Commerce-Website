import React from 'react';
import { withRouter } from 'react-router';
import './menu-item.styles.scss';

const MenuItem = ( {title , imageUrl , size , match , history , linkUrl} ) =>{
    return (
        <div className={`menu-item ${size}`}  onClick = { () => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image"  style={{
                backgroundImage : `url(${imageUrl})`
            }} />
            <div className="content">
                <h1 className="title"> {title} </h1>
                <p className="subtitle"> SHOP NOW </p>
            </div>
        </div>
    )
}

export default withRouter(MenuItem);