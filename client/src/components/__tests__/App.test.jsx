import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';

import App from '../../App';


test('App renders without crashing', () => {
  const wrapper = shallow(<App/>);
});


