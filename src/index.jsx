import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import uuidv1 from 'uuid/v1';

import '@material/switch/mdc-switch.scss';

import Wrapper from './wrapper';

const getClassNames = className => classnames({
  'mdc-switch': true,
  [className]: !!className,
});

class Switch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: uuidv1() };
  }
  render() {
    const {
      alignEnd,
      className,
      classNameFormField,
      isChecked,
      isDisabled,
      label,
      name,
      onChange,
    } = this.props;
    const { id } = this.state;
    return (
      <Wrapper
        alignEnd={alignEnd}
        className={classNameFormField}
        htmlFor={id}
        label={label}
      >
        <div className={getClassNames(className)}>
          <input
            className="mdc-switch__native-control"
            checked={isChecked}
            disabled={isDisabled}
            id={id}
            name={name}
            onChange={onChange}
            type="checkbox"
          />
          <div className="mdc-switch__background">
            <div className="mdc-switch__knob" />
          </div>
        </div>
      </Wrapper>
    );
  }
}

Switch.propTypes = {
  alignEnd: PropTypes.bool,
  className: PropTypes.string,
  classNameFormField: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  alignEnd: false,
  className: undefined,
  classNameFormField: undefined,
  isChecked: undefined,
  isDisabled: false,
  label: undefined,
  onChange: undefined,
};

export default Switch;
