import React from 'react';
import Bookmark from './Bookmark.jsx';
import addButtonImage from '../assets/add.png';
import editButtonImage from '../assets/edit.png';
import '../css/BookmarkGroup.css';

import {AddBookmarkContext} from './Main.jsx';

import BookmarkModel from '../js/BookmarkModel.js'; //test delete

class BookmarkGroup extends React.Component{
    constructor(){
        super();

        this.state = {
            groupModel: null
        }
    }

    render(){
        return(
            <div
                className="group-wrapper"

            >
                <div
                    className="group-header"
                    id={"group-header-" + this.props.groupModel.getIndex()}
                    style={{backgroundColor: this.props.groupModel.getColor()}}
                >
                    <AddBookmarkContext.Consumer>
                        {(value) => {
                            return(
                                <img 
                                    className="group-button" //new  bookmark
                                    src={addButtonImage}
                                    alt="N/A"
                                    onClick={() => value(this.state.groupModel.getIndex())}
                                />
                            )
                        }}
                    </AddBookmarkContext.Consumer>

                    <label
                        className="group-name"
                    >
                        {this.state.groupModel.getName()}
                    </label>
                    
                    <img 
                        className="group-button" //edit bookmark
                        src={editButtonImage}
                        alt="N/A"
                    />
                </div>

                <div
                    className="bookmark-explorer"
                >
                    {
                        this.state.groupModel.getBookmarks().map((bookmark) => 
                            <Bookmark
                                model={bookmark}
                                key={/* () =>  */this.generateUniqueKey(bookmark.getUrl())}
                            >
                            </Bookmark>
                        )
                    }    
                </div>
                
            </div>
        );
    }

    static getDerivedStateFromProps(props){
        return {groupModel: props.groupModel}
    }

    generateUniqueKey = (itemName) => { 
        return String(itemName + new Date().getTime().toString());
    }

    changeGroupHeaderBackgroundColor = (colorString, elementId) => {
        //document.getElementById(elementId).style["background-color"] = colorString;
    }

    componentDidMount(){
        this.changeGroupHeaderBackgroundColor(
            this.props.groupModel.getColor(),
            "group-header-" + this.props.groupModel.getIndex()
        );
    }
}

export default BookmarkGroup;