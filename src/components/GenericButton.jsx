import React from 'react';
import {AddGroupButtonContext} from './Main.jsx';

function GenericButton(){
    return(
        <AddGroupButtonContext.Consumer>
            {(value) => {
                return(
                    <button //should be img
                        typ="text"
                        className="generic-button"
                        onClick={value}
                    >
                        + Folder
                    </button>
                )
            }}
        </AddGroupButtonContext.Consumer>
        
    );
}

export default GenericButton;