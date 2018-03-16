import { shallow } from 'enzyme';
import React from 'react';

import Switch from './index';

const NAME = 'NAME';

test('<Switch /> > Adds default classNames', () => {
  const wrapper = shallow(<Switch name={NAME} />, { disableLifecycleMethods: true });
  const div = wrapper.find('div');
  const expectedBackground = 'mdc-switch__background';
  const expectedCheckbox = 'mdc-switch__native-control';
  const expectedKnob = 'mdc-switch__knob';
  const expectedRoot = 'mdc-switch';

  const actualBackground = div.at(1).props().className;
  const actualCheckbox = wrapper.find('input').props().className;
  const actualKnob = div.at(2).props().className;
  const actualRoot = div.at(0).props().className;

  expect(actualBackground).toBe(expectedBackground);
  expect(actualCheckbox).toBe(expectedCheckbox);
  expect(actualKnob).toBe(expectedKnob);
  expect(actualRoot).toBe(expectedRoot);
});

test('<Switch /> > Generates a unique id for each component', () => {
  const wrapperFirst = shallow(<Switch name={NAME} />);
  const wrapperSecond = shallow(<Switch name={NAME} />);

  const actualIdFirst = wrapperFirst.find('.mdc-switch__native-control').props().id;
  const actualIdsecond = wrapperSecond.find('.mdc-switch__native-control').props().id;

  expect(actualIdFirst).not.toBe(actualIdsecond);
});

test('<Switch /> > Passes through the correct props', () => {
  const IS_CHECKED = true;
  const IS_DISABLED = true;
  const ON_CHANGE = () => 'ON_CHANGE';
  const wrapper = shallow(
    <Switch isChecked={IS_CHECKED} isDisabled={IS_DISABLED} name={NAME} onChange={ON_CHANGE} />,
    { disableLifecycleMethods: true },
  );
  const inputProps = wrapper.find('.mdc-switch__native-control').props();
  const expectedChecked = IS_CHECKED;
  const expectedDisabled = IS_DISABLED;
  const expectedName = NAME;
  const expectedOnChange = ON_CHANGE;

  const actualChecked = inputProps.checked;
  const actualDisabled = inputProps.disabled;
  const actualName = inputProps.name;
  const actualOnChange = inputProps.onChange;

  expect(actualChecked).toBe(expectedChecked);
  expect(actualDisabled).toBe(expectedDisabled);
  expect(actualName).toBe(expectedName);
  expect(actualOnChange).toBe(expectedOnChange);
});
