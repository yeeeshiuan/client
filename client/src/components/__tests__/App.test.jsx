import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';


test('App renders without crashing', () => {
  const wrapper = shallow(<App/>);
});

test('App contain a p tag', () => {
  const wrapper = shallow(<App />);
  const p = wrapper.find('p');
  expect(p.length).toBe(1);
  expect(p.get(0).props.children).toBe('This is my App.');
});


