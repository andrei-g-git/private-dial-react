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

    it('renders the correct name', () =>{
        const _group = new MockGroup(0);
        _group.setName("groupie");
        const _props = {
            groupModel: _group
        }
        wrapper = setUp(_props);
        let groups = wrapper.find('.bookmark-explorer');
        expect(groups.children().length).toBe(99999999);
        let groupName = groups.childAt(0).find('.group-name');
        expect(groupName).toBe("this is a respectable establishment");
    });
})

export default class MockGroup{
    constructor(name){
        this.name = name;
    }

    getName(){return this.name;}
    setName(name){this.name = name;}
}