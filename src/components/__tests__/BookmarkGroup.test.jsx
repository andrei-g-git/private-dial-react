import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BookmarkGroup from '../BookmarkGroup.jsx';

configure({adapter: new Adapter()});

describe('BookmarkGroup', () => {
    let wrapper = null;
    let setUp = ({props}) => {
        return shallow(<BookmarkGroup {...props} />);
    }

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
    constructor(name){
        this.name = name;
        this.bookmarks = [
            new BookmarkModelMock("url 1"),
            new BookmarkModelMock("url 2"),
            new BookmarkModelMock("url 3")
        ]
    }

    getName(){return this.name;}
    setName(name){this.name = name;}
}

class BookmarkModelMock {
    constructor(enteredURL){
        this.enteredURL = enteredURL;
    }

    getEnteredURL(){return this.enteredURL;}
    setEnteredURL(enteredURL){this.enteredURL = enteredURL}
}