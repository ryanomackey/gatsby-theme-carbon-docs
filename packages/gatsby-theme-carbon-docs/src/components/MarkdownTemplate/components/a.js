import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'carbon-components-react';

const a = ({ children, className, ...rest }) => {
  // For linked headers, we add a nice link icon
  if (className === 'anchor') {
    return (
      <a className={className} {...rest}>
        <Icon name="icon--link" description={rest['aria-label']} />
        {children}
      </a>
    );
  }

  return <a {...rest}>{children}</a>;
};

a.defaultProps = {
  children: null,
  className: '',
};

a.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default a;
