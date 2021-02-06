import React from 'react';
import '../css/BookmarkDialog.css';   //EMPTY 1!!! #############################

// NO CSS, DOESN"T RENDER
class BookmarkDialog extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            show: false
        }
    }

    render(){
        return(
            <div>
                {
                    this.state.show

                    ?

                    <div
                        className="bookmark-dialog-container"
                    >
                        <div
                            id="delete-this-ASP-just here to separate the close button"
                        >
                            <form
                                id={this.props.idAffix + "-bookmark-dialog"}
                                className="bookmark-dialog-form"
                                onSubmit={this.handleSubmit}                        
                            >
                                <label
                                    className="bookmark-name-label"
                                >
                                    Type in the FULL url:
                                </label>

                                <input 
                                    type="text"
                                    id={this.props.idAffix + "-bookmark-name-field"} /* these are going to repeat in the dom, should be dynamic */
                                    className="bookmark-name-field"                    
                                >
                                </input>

                                <button //should be img
                                    type="submit"
                                    id={this.props.idAffix + "-save-bookmark-button"}
                                    className="save-bookmark-button"
                                >
                                    Save
                                </button>

                            </form>

                            <button
                                    type="text"
                                    id={this.props.idAffix + "-cancel-bookmark-button"}
                                    className="cancel-bookmark-save"
                                    onClick={this.props.handleClose}
                            >
                                Cancel
                            </button>                        
                        </div>
                    </div>

                    :

                    <div></div>
                }
            </div>
        ); 
    }  
    
    static getDerivedStateFromProps(props, state){
        return {show: props.show}
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        var urlField = event.currentTarget[0];
        this.props.handleUrl(urlField.value, this.props.groupIndex);
    }    

}

export default BookmarkDialog;