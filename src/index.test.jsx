import { shallow } from 'enzyme';
import React from 'react';

import Switch from './index';

const LABEL = 'LABEL';
const NAME = 'NAME';

test('<Switch /> > Adds default classNames', () => {
  const wrapper = shallow(<Switch label={LABEL} name={NAME} />, { disableLifecycleMethods: true });
  const div = wrapper.find('div');
  const expectedBackground = 'mdc-switch__background';
  const expectedCheckbox = 'mdc-switch__native-control';
  const expectedKnob = 'mdc-switch__knob';
  const expectedLabel = 'mdc-typography';
  const expectedRoot = 'mdc-switch';

  const actualBackground = div.at(1).props().className;
  const actualCheckbox = wrapper.find('input').props().className;
  const actualKnob = div.at(2).props().className;
  const actualLabel = wrapper.find('label').props().className;
  const actualRoot = div.at(0).props().className;

  expect(actualBackground).toBe(expectedBackground);
  expect(actualCheckbox).toBe(expectedCheckbox);
  expect(actualKnob).toBe(expectedKnob);
  expect(actualLabel).toBe(expectedLabel);
  expect(actualRoot).toBe(expectedRoot);
});

test('<Switch /> > Adds the same id to the label and input', () => {
  const wrapper = shallow(<Switch label={LABEL} name={NAME} />, { disableLifecycleMethods: true });

  const actualInputId = wrapper.find('.mdc-switch__native-control').props().id;
  const actualLabelHtmlFor = wrapper.find('label').props().htmlFor;

  expect(actualInputId).toBe(actualLabelHtmlFor);
});

test('<Switch /> > Generates a unique id for each component', () => {
  const wrapperFirst = shallow(<Switch name={NAME} />, { disableLifecycleMethods: true });
  const wrapperSecond = shallow(<Switch name={NAME} />, { disableLifecycleMethods: true });

  const actualIdFirst = wrapperFirst.find('.mdc-switch__native-control').props().id;
  const actualIdsecond = wrapperSecond.find('.mdc-switch__native-control').props().id;

  expect(actualIdFirst).not.toBe(actualIdsecond);
});

test('<Switch /> >  Renders a label if one is given', () => {
  const wrapper = shallow(<Switch label={LABEL} name={NAME} />, { disableLifecycleMethods: true });
  const label = wrapper.find('label');
  const expectedExists = true;
  const expectedValue = LABEL;

  const actualExists = label.exists();
  const actualValue = label.text();

  expect(actualExists).toBe(expectedExists);
  expect(actualValue).toBe(expectedValue);
});

test('<Switch /> > Omits the label if none is given', () => {
  const wrapper = shallow(<Switch name={NAME} />, { disableLifecycleMethods: true });
  const expected = false;

  const actual = wrapper.find('label').exists();

  expect(actual).toBe(expected);
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
