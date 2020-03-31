import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SprkSkipNav from './SprkSkipNav';

Enzyme.configure({ adapter: new Adapter() });
let stub;

beforeEach(() => {
  stub = sinon.stub(console, 'error');
});

afterEach(() => {
  stub.restore();
});

describe('SprkSkipNav:', () => {
  it('should render', () => {
    const wrapper = shallow(<SprkSkipNav />);
    expect(wrapper.find('div.sprk-c-SkipNav').length).toBe(1);
  });
});
