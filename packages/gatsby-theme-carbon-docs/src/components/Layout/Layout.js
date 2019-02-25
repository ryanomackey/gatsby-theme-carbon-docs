import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'carbon-components/scss/globals/scss/styles.scss';
import 'prismjs/themes/prism-okaidia.css';

import Header from '../Header';
import LeftNav from '../LeftNav';

import Styled from './Layout.styles';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navOpen: true,
    };

    this.resize = this.resize.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    this.resize();
    window.addEventListener('resize', this.resize); // eslint-disable-line no-undef
  }

  resize() {
    this.setState({ navOpen: window.innerWidth > 760 }); // eslint-disable-line no-undef
  }

  toggleNav() {
    this.setState(state => ({
      navOpen: !state.navOpen,
    }));
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                subtitle
              }
            }
          }
        `}
        render={data => {
          const { title, subtitle } = data.site.siteMetadata;
          const { children } = this.props;
          const { navOpen } = this.state;

          return (
            <Styled.Container navOpen={navOpen}>
              <Helmet title={`${title}: ${subtitle}`} />
              <Header siteTitle={title} siteSubtitle={subtitle} />
              <LeftNav navOpen={navOpen} toggleNav={this.toggleNav} />
              <Styled.Main>{children}</Styled.Main>
            </Styled.Container>
          );
        }}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
