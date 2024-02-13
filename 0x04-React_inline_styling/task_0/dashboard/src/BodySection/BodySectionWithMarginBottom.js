import React from 'react'
import Bodysection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

const BodySectionWithMarginBottom = ({ title, children }) => {
  return (
    <div className='bodySectionWithMargin'>
      <Bodysection title={title}>
        {children}
      </Bodysection>
    </div>
  );
};
BodySectionWithMarginBottom.prototypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default BodySectionWithMarginBottom
