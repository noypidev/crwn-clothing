import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, whichProvider, ...otherButtonProps }) => {
   var loginProvider;

   switch (whichProvider) {
      case 'google':
         loginProvider = 'google-sign-in';
         break;
      default:
         loginProvider = '';
   }

   return (
      <button
         className={`${loginProvider} custom-button`.trim()}
         {...otherButtonProps}
      >
         {children}
      </button>
   );
};

export default CustomButton;
