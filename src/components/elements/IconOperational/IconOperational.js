import React from 'react';
import PropTypes from 'prop-types';
import { autoPx } from '../../../utils/unit';
import compareProps from '../../../utils/compareProps';

function IconOperational({ fill }) {
  const r24 = autoPx(24);
  const d1 = `M7.62598 11.8774L8.85352 10.4109L7.62524 8.9436C7.54083
  9.24136 7.2702 9.45917 6.94922 9.45917H0V11.3589H6.94922C7.2713
  11.3589 7.54266 11.5782 7.62598 11.8774Z`;
  const d2 = `M14.2509 3H0.703125C0.314758 3 0 3.31891 0
  3.7124V8.0343H6.24609V7.03694C6.24609 6.38539
  7.06769 6.04236 7.51465 6.61339L10.309 9.95185C10.5363
  10.2238 10.5267 10.6184 10.3019 10.8787L7.4848
  14.2442C7.06183 14.75 6.24811 14.4418 6.24774
  13.7851H6.24609V12.7836H0V18.1122C0 18.5057 0.314758
  18.8246 0.703125 18.8246H2.30585C2.56146 20.0776
  3.65588 21 4.94531 21C6.23474 21 7.32916 20.0774
  7.58478 18.8246H14.2509C14.6393 18.8246 14.954
  18.5057 14.954 18.1122V3.7124C14.954 3.31891 14.6393
  3 14.2509 3ZM5.85681 19.1927C5.04712 20.0132
  3.65625 19.4296 3.65625 18.2691C3.65625 17.1087 5.04712
  16.525 5.85681 17.3456C6.36017 17.8554 6.36017 18.6828 5.85681 19.1927Z`;
  const d3 = `M23.3539 12.2511C22.9606 11.8526 22.4193
  11.6035 21.8222 11.5966V11.5964H18.5635C18.1751
  11.5964 17.8604 11.2775 17.8604 10.884C17.8604 10.4905
  18.1751 10.1716 18.5635 10.1716H20.9841L20.4436
  9.25255C19.9503 8.41362 19.2866 7.75428 18.5027
  7.30291C18.1077 7.07565 17.6842 6.90163 17.2387
  6.78493C17.021 6.72779 16.8099 6.77195 16.6321
  6.91127C16.4545 7.05079 16.3596 7.24688 16.3596
  7.4747V18.103C16.3596 18.4954 16.6753 18.8154
  17.0627 18.8154H17.541C17.6481 19.3505 17.9098 19.8286
  18.2766 20.2001C18.7643 20.6944 19.4382 21.0001
  20.1823 21.0001C20.9266 21.0001 21.6005 20.6944
  22.0883 20.2001C22.455 19.8286 22.7165 19.3503
  22.8238 18.8154H23.2969C23.6853 18.8154 24.0001
  18.4965 24.0001 18.103V13.8286C24.0001 13.2134
  23.7527 12.6554 23.3539 12.2511ZM21.0938
  19.1928C20.8605 19.4291 20.5383 19.5753 20.1823
  19.5753C19.8262 19.5753 19.5039 19.4291
  19.2706 19.1928C19.0374 18.9566 18.8932 18.6299
  18.8932 18.2692C18.8932 17.9086 19.0375 17.5819
  19.2706 17.3457C19.5039 17.1094 19.8262 16.9632
  20.1823 16.9632C20.5383 16.9632 20.8605 17.1094
  21.0938 17.3457C21.3271 17.5819 21.4714 17.9086
  21.4714 18.2692C21.4714 18.6299 21.3271 18.9566 21.0938 19.1928Z`;

  return (
    <svg fill="none" height={r24} viewBox="0 0 24 24" width={r24} xmlns="http://www.w3.org/2000/svg">
      <path d={d1} fill={fill} />
      <path d={d2} fill={fill} />
      <path d={d3} fill={fill} />
    </svg>
  );
}

export default React.memo(IconOperational, compareProps);

IconOperational.defaultProps = {
  fill: '#25282B',
};

IconOperational.propTypes = {
  fill: PropTypes.string,
};
