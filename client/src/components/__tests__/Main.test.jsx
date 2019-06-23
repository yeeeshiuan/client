import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';

import Main from '../Main';


test('Main renders without crashing', () => {
  const wrapper = shallow(<Main/>);
});

test('Main contain a p tag', () => {
  const wrapper = shallow(<Main />);
  const p = wrapper.find('p');
  expect(p.length).toBe(1);
  expect(p.get(0).props.children).toBe('This is my App.(Main)');
});

test('Main will call componentDidMount when mounted', () => {
  const onDidMount = jest.fn();
  Main.prototype.componentDidMount = onDidMount;
  const wrapper = mount(<Router><Main/></Router>);
  expect(onDidMount).toHaveBeenCalledTimes(1)
});

test('Main renders a snapshot properly', () => {
  const tree = renderer.create(<Main/>).toJSON();
  expect(tree).toMatchSnapshot();
});
