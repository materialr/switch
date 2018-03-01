/* eslint-disable jsx-a11y/label-has-for */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import uuidv1 from 'uuid/v1';

import '@material/switch/mdc-switch.scss';

const getClassNames = className => classnames({
  'mdc-switch': true,
  [className]: !!className,
});

const Switch = ({ className, isChecked, isDisabled, label, name, onChange }) => {
  const uniqueId = uuidv1();
  return (
    <React.Fragment>
      <div className={getClassNames(className)}>
        <input
          className="mdc-switch__native-control"
          checked={isChecked}
          disabled={isDisabled}
          id={uniqueId}
          name={name}
          onChange={onChange}
          type="checkbox"
        />
        <div className="mdc-switch__background">
          <div className="mdc-switch__knob" />
        </div>
      </div>
      {label && <label className="mdc-typography" htmlFor={uniqueId}>{label}</label>}
    </React.Fragment>
  );
};

Switch.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  className: undefined,
  isChecked: undefined,
  isDisabled: false,
  label: undefined,
  onChange: undefined,
};

export default Switch;
