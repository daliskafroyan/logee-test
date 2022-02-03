import React from 'react';
import PropTypes from 'prop-types';

import compareProps from '../../../utils/compareProps';

function IconLogo() {

  return (
    <svg fill="none" height="16" viewBox="0 0 20 16" width="20" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.48445 0.800232H0.400024V15.2001H3.48445V0.800232Z" fill="black"/>
      <path d="M8.45778 0.799957H5.37335V15.1999H8.45778V0.799957Z" fill="black"/>
      <path d="M5.39734 15.1999C5.39734 15.1999 5.63644 0.799957 19.6001 0.799957V3.89255C8.41004 3.89255 8.48177 15.1999 8.48177 15.1999H5.39734Z" fill="black"/>
      <path d="M9.91626 15.1997C9.91626 15.1997 10.0119 5.60785 19.5999 5.60785V8.70045C12.4986 8.70045 13.0007 15.1997 13.0007 15.1997H9.91626Z" fill="black"/>
      <path d="M17.5676 15.1998C18.6769 15.1998 19.5761 14.2911 19.5761 13.1703C19.5761 12.0494 18.6769 11.1407 17.5676 11.1407C16.4584 11.1407 15.5591 12.0494 15.5591 13.1703C15.5591 14.2911 16.4584 15.1998 17.5676 15.1998Z" fill="black"/>
    </svg>
  );
}

export default React.memo(IconLogo, compareProps);

IconLogo.defaultProps = {
  fill: '#25282B',
};

IconLogo.propTypes = {
  fill: PropTypes.string,
};