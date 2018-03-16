import FormField from '@materialr/form-field';
import PropTypes from 'prop-types';
import React from 'react';

const Wrapper = ({
  alignEnd,
  children,
  className,
  htmlFor,
  label,
}) => (
  label ?
    <FormField
      alignEnd={alignEnd}
      className={className}
      htmlFor={htmlFor}
      label={label}
    >
      {children}
    </FormField> :
    <React.Fragment>{children}</React.Fragment>
);

Wrapper.propTypes = {
  alignEnd: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
};

Wrapper.defaultProps = {
  alignEnd: false,
  children: undefined,
  className: undefined,
  htmlFor: undefined,
  label: undefined,
};

export default Wrapper;
