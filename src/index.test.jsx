import * as formField from '@material/form-field';
import { mount, shallow } from 'enzyme';
import React from 'react';

import Switch from './index';

const LABEL = 'LABEL';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Switch label={LABEL} />, { disableLifecycleMethods: true });
  const expected = 'mdc-switch';

  const actual = wrapper.find('div').at(1).props().className;

  expect(actual).toBe(expected);
});

test('Renders additional classNames with the \'className\' prop', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Switch className={CLASS_NAME} label={LABEL} />,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-switch ${CLASS_NAME}`;

  const actual = wrapper.find('div').at(1).props().className;

  expect(actual).toBe(expected);
});

test('Passes the id to the input and the label', () => {
  const ID = 'ID';
  const wrapper = shallow(<Switch id={ID} label={LABEL} />, { disableLifecycleMethods: true });
  const expectedInput = ID;
  const expectedLabel = ID;

  const actualInput = wrapper.find('input').props().id;
  const actualLabel = wrapper.find('label').props().htmlFor;

  expect(actualInput).toBe(expectedInput);
  expect(actualLabel).toBe(expectedLabel);
});

test('Generates a unique id per instance if none is given', () => {
  const wrapperOne = shallow(<Switch label={LABEL} />, { disableLifecycleMethods: true });
  const wrapperTwo = shallow(<Switch label={LABEL} />, { disableLifecycleMethods: true });

  const actualOne = wrapperOne.find('input').props().id;
  const actualTwo = wrapperTwo.find('input').props().id;

  expect(actualOne).not.toBe(actualTwo);
});

test('Passes through the correct props', () => {
  const CHECKED = true;
  const DISABLED = true;
  const NAME = 'NAME';
  const ON_BLUR = () => 'ON_BLUR';
  const ON_CHANGE = () => 'ON_CHANGE';
  const ON_DRAG_START = () => 'ON_DRAG_START';
  const ON_DROP = () => 'ON_DROP';
  const ON_FOCUS = () => 'ON_FOCUS';
  const wrapper = shallow(
    <Switch
      checked={CHECKED}
      disabled={DISABLED}
      label={LABEL}
      name={NAME}
      onBlur={ON_BLUR}
      onChange={ON_CHANGE}
      onDragStart={ON_DRAG_START}
      onDrop={ON_DROP}
      onFocus={ON_FOCUS}
    />,
    { disableLifecycleMethods: true },
  );
  const expectedChecked = CHECKED;
  const expectedDisabled = DISABLED;
  const expectedLabel = LABEL;
  const expectedName = NAME;
  const expectedOnBlur = ON_BLUR;
  const expectedOnChange = ON_CHANGE;
  const expectedOnDragStart = ON_DRAG_START;
  const expectedOnDrop = ON_DROP;
  const expectedOnFocus = ON_FOCUS;

  const inputProps = wrapper.find('input').props();
  const actualChecked = inputProps.checked;
  const actualDisabled = inputProps.disabled;
  const actualLabel = wrapper.find('label').props().children;
  const actualName = inputProps.name;
  const actualOnBlur = inputProps.onBlur;
  const actualOnChange = inputProps.onChange;
  const actualOnDragStart = inputProps.onDragStart;
  const actualOnDrop = inputProps.onDrop;
  const actualOnFocus = inputProps.onFocus;

  expect(actualChecked).toBe(expectedChecked);
  expect(actualDisabled).toBe(expectedDisabled);
  expect(actualLabel).toBe(expectedLabel);
  expect(actualName).toBe(expectedName);
  expect(actualOnBlur).toBe(expectedOnBlur);
  expect(actualOnChange).toBe(expectedOnChange);
  expect(actualOnDragStart).toBe(expectedOnDragStart);
  expect(actualOnDrop).toBe(expectedOnDrop);
  expect(actualOnFocus).toBe(expectedOnFocus);
});

test('Creates the MDCFormField component on mount', () => {
  const MDCFormField = jest.fn();
  formField.MDCFormField = MDCFormField;
  const wrapper = mount(<Switch label={LABEL} />);
  const instance = wrapper.instance();
  const expected = instance.elementFormField;

  const actual = MDCFormField.mock.calls[0][0];

  expect(actual).toBe(expected);
});

test('Destroys the MDCFormField component on unmount', () => {
  const destroy = jest.fn();
  const wrapper = mount(<Switch label={LABEL} />);
  const instance = wrapper.instance();
  const expected = 1;
  instance.formField.destroy = destroy;

  wrapper.unmount();
  const actual = destroy.mock.calls.length;

  expect(actual).toBe(expected);
});
