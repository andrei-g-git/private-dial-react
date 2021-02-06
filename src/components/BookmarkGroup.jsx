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
                >
                    <AddBookmarkContext.Consumer>
                        {(value) => {
                            return(
                                <img 
                                    className="group-button"
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
                        className="group-button"
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

    //test
    componentDidMount(){
/*         this.state.groupModel.pushBookmark(new BookmarkModel("https://wikipedia.org/1234567890123456789"));
        this.setState({
            groupModel: this.state.groupModel
        }) */
    }
}

export default BookmarkGroup;