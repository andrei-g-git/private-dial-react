import React from 'react';
import '../css/Bookmark.scss';
import FaviconSrcGenerator from '../js/FaviconSrcGenerator';

function Bookmark(props){
    return(
        <div
            className="bookmark-with-favicon"
            onClick={() => handleClick(props.model.getUrl())}
        >
            <img
                className="favicon"
                src={generateFavicon(props.model.getUrl())} //doesn't even run
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

const handleClick = (url) => {
    window.open(url, '_blank');
}

const generateFavicon = (url) => {
    let generator = new FaviconSrcGenerator();
    return generator.generateFromUrl(url);
}

export default Bookmark;