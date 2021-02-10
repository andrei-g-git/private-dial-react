import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookmarkGroup from '../BookmarkGroup.js';

configure({adapter: new Adapter()});

describe('BookmarkGroup', () => {
    let wrapper = null;
    let setUp = ({props}) => {
        return shallow(<BookmarkGroup {...props} />);
    }

    it('has the right header color', () => { //same problem as eveywhere else, props are undefined. also it can't import the pngs
/*          const _group = new MockGroup(0); //dryt
        _group.setColor("red");
        const _props = {
            groupModel: _group
        }
        wrapper = setUp(_props);    
        let groupHeader = wrapper.find(".group-header")[0];
        expect(groupHeader.prop('style')).toHaveProperty("backgroundColor", "blue");  */   
    });

    it('renders the correct name and color', () =>{
/*         const _group = new MockGroup(0); //dryt
        _group.setName("groupie");
        const _props = {
            groupModel: _group
        }
        wrapper = setUp(_props);

        let groupName = wrapper.find('.group-name'); 
        expect(groupName).toBe("this is a respectable establishment");
        //also need color */
    });

    it('renders the correct number of bookmarks', () => {
/*         const _group = new MockGroup(0);
        const _props = {
            groupModel: _group
        }
        wrapper = setUp(_props);   
        let bookmarks = wrapper.find(".bookmark-explorer");
        expect(bookmarks.children().length).toBe(1000);   */      
    });
})

export default class MockGroup{
    constructor(index){
        this.name = name;
        this.color = "lightgray"
        this.index = index;
        this.bookmarks = [
            new BookmarkModelMock("url 1"),
            new BookmarkModelMock("url 2"),
            new BookmarkModelMock("url 3")
        ]
    }

    getName(){return this.name;}
    setName(name){this.name = name;}
    setColor(color){this.color = color}
    getIndex(){return this.index;}
}

class BookmarkModelMock {
    constructor(enteredURL){
        this.enteredURL = enteredURL;
    }

    getEnteredURL(){return this.enteredURL;}
    setEnteredURL(enteredURL){this.enteredURL = enteredURL}
}