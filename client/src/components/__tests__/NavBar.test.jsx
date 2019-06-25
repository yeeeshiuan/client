import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import NavBar from '../NavBar';


test('NavBar renders properly', () => {
  const title = 'Hello, World!';
  const wrapper = shallow(<NavBar title={title}/>);
  //console.log(wrapper.debug());
  const element = wrapper.find('d');
  expect(element.length).toBe(6);
  expect(element.get(1).props.children).toBe(title);
  expect(element.get(3).props.children).toBe('About');
  expect(element.get(5).props.children).toBe('At the end');
});

test('NavBar renders a snapshot properly', () => {
  const tree = renderer.create(
    <Router location="/"><NavBar/></Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
