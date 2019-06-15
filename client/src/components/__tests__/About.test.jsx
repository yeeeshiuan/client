import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import About from '../About';


test('About renders without crashing', () => {
  const wrapper = shallow(<About/>);
});

test('About contain a p tag', () => {
  const wrapper = shallow(<About />);
  const p = wrapper.find('p');
  expect(p.length).toBe(1);
  expect(p.get(0).props.children).toBe('This is my App.(About)');
});

test('About renders a snapshot properly', () => {
  const tree = renderer.create(<About/>).toJSON();
  expect(tree).toMatchSnapshot();
});
