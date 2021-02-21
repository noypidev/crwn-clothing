import React from 'react';

import './form-input.style.scss';

const FormInput = ({ handleChange, label, id, ...otherInputProps }) => {
   return (
      <div className='group'>
         <input
            id={id}
            className='form-input'
            onChange={handleChange}
            {...otherInputProps}
         />
         {label ? (
            <label
               htmlFor={id}
               className={`${otherInputProps.value.length ? 'shrink' : '' } form-input-label`}
            >
               {label}
            </label>
         ) : null}
      </div>
   );
};

export default FormInput;
