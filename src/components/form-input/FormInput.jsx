import React from 'react';
import Proptypes from 'prop-types';

import './form-input.scss';

const FormInput = React.forwardRef(
  ({ handleChange, label, ...otherProps }, ref) => {
    return (
      <div className='group'>
        <input
          ref={ref}
          className='form-input'
          onChange={handleChange}
          {...otherProps}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? 'shrink' : ''
            } form-input-label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  }
);

FormInput.propTypes = {
  handleChange: Proptypes.func,
  label: Proptypes.string,
};

export default FormInput;
