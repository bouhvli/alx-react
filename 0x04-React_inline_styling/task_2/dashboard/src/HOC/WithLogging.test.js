import React from "react";
import { shallow } from 'enzyme';
import WithLogging from "./WithLogging";

const TestComponent = () => <p>Test Component</p>;

describe('tests of WithLogging', () => {
  const spy = jest.spyOn(console, 'log').mockImplementation();
  const NewComponent = WithLogging(TestComponent);
  const wrapper = shallow(<NewComponent />);

  it('should log when mounted and unmounted', () => {
    expect(spy).toBeCalledTimes(1);
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    spy.mockRestore();
  });

  it('should log the correct msg when mounted and unmounted', () => {
    expect(spy).toBeCalledTimes(1);
    expect(spy).tobeCalledWith('Component TestComponent is mounted');
    wrapper.unmount();
    expect(spy).toBeCalledTimes(2);
    expect(spy).tobeCalledWith('Component TestComponent is going to be unmonted');
    spy.mockRestore();
  });
});

