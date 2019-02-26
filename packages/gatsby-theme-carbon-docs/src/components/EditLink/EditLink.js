import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Styled from './EditLink.styles';

const getRelativePath = fileAbsolutePath => {
  return fileAbsolutePath.split('/docs')[1];
};

const EditLink = ({ fileAbsolutePath }) => (
  <StaticQuery
    query={graphql`
      query EditLinkQuery {
        site {
          siteMetadata {
            gitUrl
          }
          pathPrefix
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { gitUrl },
        pathPrefix,
      },
    }) => {
      return (
        <Styled.Container>
          <Styled.Button
            href={`${gitUrl}${pathPrefix}/edit/master/docs${getRelativePath(
              fileAbsolutePath,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            icon="icon--launch"
          >
            Edit this page on GitHub
          </Styled.Button>
        </Styled.Container>
      );
    }}
  />
);

EditLink.propTypes = {
  fileAbsolutePath: PropTypes.string.isRequired,
};

export default EditLink;
