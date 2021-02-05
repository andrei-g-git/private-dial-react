import React from 'react';
import GenericButton from './GenericButton.jsx';
import '../css/RightSidebar.css'

class RightSidebar extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            bookmarkGroups: props.bookmarkGroups
        };
    }
    render(){
        return(
            <div
                id="right-sidebar"
            >
                <GenericButton></GenericButton>
            </div>
        )
    }

    addGroup = () => {
        //this actually didn't do anything in the vue app, the modal handles new groups 
    }
}

export default RightSidebar;