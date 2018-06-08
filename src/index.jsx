import { MDCFormField } from '@material/form-field';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import uuidv1 from 'uuid/v1';

import '@material/switch/mdc-switch.scss';

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.elementFormField = undefined;
    this.formField = undefined;
    this.state = { id: uuidv1() };
    this.getClassNames = this.getClassNames.bind(this);
    this.getId = this.getId.bind(this);
  }
  componentDidMount() {
    this.formField = new MDCFormField(this.elementFormField);
  }
  componentWillUnmount() {
    this.formField.destroy();
  }
  getClassNames() {
    const { className } = this.props;
    return classnames({
      'mdc-switch': true,
      [className]: !!className,
    });
  }
  getId() {
    return this.props.id || this.state.id;
  }
  render() {
    const {
      getClassNames,
      getId,
      props: {
        checked,
        className,
        disabled,
        id,
        label,
        name,
        onBlur,
        onChange,
        onDragStart,
        onDrop,
        onFocus,
        ...props
      },
    } = this;
    return (
      <div
        className="mdc-form-field"
        ref={(elementFormField) => { this.elementFormField = elementFormField; }}
        {...props}
      >
        <div className={getClassNames()}>
          <input
            className="mdc-switch__native-control"
            checked={checked}
            disabled={disabled}
            id={getId()}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onFocus={onFocus}
            type="checkbox"
          />
          <div className="mdc-switch__background">
            <div className="mdc-switch__knob" />
          </div>
        </div>
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label htmlFor={getId()}>{label}</label>
      </div>
    );
  }
}

Switch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  onFocus: PropTypes.func,
};

Switch.defaultProps = {
  checked: false,
  className: undefined,
  disabled: false,
  id: undefined,
  name: undefined,
  onBlur: undefined,
  onChange: undefined,
  onDragStart: undefined,
  onDrop: undefined,
  onFocus: undefined,
};

export default Switch;
