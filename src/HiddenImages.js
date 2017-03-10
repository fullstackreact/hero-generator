import React from 'react';

const HiddenImages = ({ srcs }) => (
  <div
    style={{ visibility: 'hidden', width: 0, height: 0, overflow: 'hidden' }}
  >
    {srcs.map((src, idx) => <img src={src} key={idx} alt='' />)}
  </div>
);
export default HiddenImages;
