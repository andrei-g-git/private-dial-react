import React from 'react';
import '../css/Bookmark.css';

function Bookmark(props){
    return(
        <div
            className="bookmark-with-favicon"
        >
            <img
                className="favicon"
                img="..."
                alt="N/A"
            />

            <label
                className="page-name"
            >
                {props.model.getUrl()} {/* gotta be at least a domain name */}
            </label>
        </div>
    );
}

export default Bookmark;