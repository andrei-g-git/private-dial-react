import React from 'react';

import './../css/ContextMenu.scss';

class ContextMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            idAffix: props.idAffix,
            items: props.menuItems,
            showMenu: props.showContext,
            positionX: props.positionX,
            positionY: props.positionY
        }
    }

    render(){
        if(this.props.showContext){ //this is silly, I'm already sending this back to the parent, might as well handle visibility directy from there
            return(
                <div>
                    <ul
                        style={{
                            left: this.props.positionX,
                            top: this.props.positionY
                        }}
                        id={ "context-menu-" + this.state.idAffix }
                        onMouseLeave={this.onMouseLeave}
                    >
                        {this.iterateItems()} 
                    </ul>  
                </div>                
            )
        } else {
            return null;
        }
    }

    componentDidMount(){  
        if(this.state.showMenu){
            var contextMenu = document.getElementById("#context-menu-" + this.props.idAffix.toString());
            contextMenu.addEventListener("click", this.handleClick);
            //contextMenu.addEventListener("mouseout", this.onMouseLeave);
        }            
    }

    componentWillUnmount(){
        if(this.state.showMenu){
            var contextMenu = document.getElementById("#context-menu-" + this.props.idAffix.toString());
            contextMenu.removeEventListener("click", this.handleClick);  
            //contextMenu.removeEventListener("mouseout", this.onMouseLeave);    
        }       
    }

    iterateItems = () => {
        if(this.state.items.length > 0){
            return this.state.items.map((item) =>
                <li
                    className="context-menu-item"
                    onClick={this.handleClick.bind(this, item.callback)} 
                    key={this.generateUniqueKey(item.name)}
                >
                    {item.name}
                </li>
            )
        } else {
            return null;
        }
    }

    generateUniqueKey = (itemName) => {
        return itemName + new Date().getTime().toString();
    }

    handleClick = (callback) => {
        if(this.state.showMenu){
            this.setState({
                showMenu: false //probably not necessary, already doing it in the parent
            });
        }
        callback();        
    }

    onMouseLeave = () => {
        this.props.handleClose();
    }
}

export default ContextMenu;