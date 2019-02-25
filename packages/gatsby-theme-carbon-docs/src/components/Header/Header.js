import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Header.styles';

const Header = ({ siteTitle, siteSubtitle }) => (
  <Styled.Header>
    <Styled.Link to="/">
      {siteTitle}
      <Styled.Subtitle>: {siteSubtitle}</Styled.Subtitle>
    </Styled.Link>
  </Styled.Header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  siteSubtitle: PropTypes.string.isRequired,
};

export default Header;
