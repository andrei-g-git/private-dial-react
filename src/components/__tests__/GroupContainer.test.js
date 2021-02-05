import React from 'react';
import {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GroupContainer from '../GroupContainer.jsx';
import Enzyme from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('GroupContainer', () => {
    let wrapper = null;
    let setUp = ({props}) => {
        return  shallow(<GroupContainer {...props} />);
    }

    it('displays the right number of groups', () => {
/*         const _props = {
            groups: [
                new MockGroup("stuff"),
                new MockGroup("misc")
            ]
        }
        wrapper = setUp(_props);

        let bookmarkGroups = wrapper.find(".bookmark-group");
        expect(bookmarkGroups.children().length).toBe(5000);
        expect(bookmarkGroups.childAt(0).getName()).toBe("not so much stuff"); */
    });
})

export default class MockGroup{
    constructor(name){
        this.name = name;
    }

    getName(){return this.name}
}
