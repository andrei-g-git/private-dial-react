import React from 'react';
import BookmarkGroup from './BookmarkGroup.jsx'
import '../css/GroupContainer.css';

class GroupContainer extends React.Component{
    constructor(){
        super();

        this.state = {
            groups: null
        };
    }

    render(){
        return(
            <div
                id="group-container"
            >
                {
                    this.props.groups.map((group) => 
                        <BookmarkGroup
                            className="bookmark-group"
                            groupModel={group}
                            key={this.generateUniqueKey(group.getName())} //no bueno gotta randomize key
                            value={group.getName()}

                            handleNoteContextWithIndexAndCoordinates={this.props.handleNoteContextWithIndexAndCoordinates}
                        >
                        </BookmarkGroup>
                    )
                }
            </div>
        );
    }

    static getDerivedStateFromProps(props, state){
        return {groups: props.groups}
    }

    generateUniqueKey = (itemName) => { 
        return String(itemName + new Date().getTime());
    }
}

export default GroupContainer;