import React from 'react';
import './homepage.styles.scss';
import DirectoryMenu from '../../Components/directory-menu/directory-menu.component'

const HomePage = () =>{
    return(
        <div className="homepage">
            <DirectoryMenu />
        </div>
    )
}

export default HomePage;