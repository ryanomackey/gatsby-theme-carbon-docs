import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';

const inlineCode = ({ children, ...rest }) => (
  <Highlight
    {...defaultProps}
    code={children}
    language="text"
    theme={undefined}
  >
    {({ className, style }) => (
      <code className={className} style={style} {...rest}>
        {children}
      </code>
    )}
  </Highlight>
);

inlineCode.propTypes = {
  children: PropTypes.string.isRequired,
};

export default inlineCode;
