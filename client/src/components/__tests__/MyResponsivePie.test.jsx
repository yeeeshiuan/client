import React from 'react';
import { shallow } from 'enzyme';

import MyResponsivePie from '../charts/MyResponsivePie';


test('MyResponsivePie renders without crashing', () => {
  const wrapper = shallow(<MyResponsivePie/>);
});


