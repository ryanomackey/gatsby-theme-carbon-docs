import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Styled from './LeftNav.styles';

const LeftNav = ({ navOpen, toggleNav }) => (
  <StaticQuery
    query={graphql`
      {
        allSectionsYaml {
          edges {
            node {
              id
              location
              title
            }
          }
        }
        allMdx {
          edges {
            node {
              id
              fields {
                slug
                section
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `}
    render={({
      allSectionsYaml: { edges: sections },
      allMdx: { edges: docPages },
    }) => (
      <Styled.Aside navOpen={navOpen} onClick={() => toggleNav()}>
        <Styled.Nav>
          <ul>
            {navOpen &&
              sections.map(
                ({
                  node: { id: sectionId, title: sectionTitle, location },
                }) => (
                  <li key={sectionId}>
                    <Styled.NavItem>{sectionTitle}</Styled.NavItem>
                    <ul>
                      {docPages.map(
                        ({
                          node: {
                            id: pageId,
                            fields: { slug, section },
                            frontmatter: { title: pageTitle },
                          },
                        }) =>
                          location === section && (
                            <li key={pageId}>
                              <Styled.Link to={slug} activeClassName="active">
                                {pageTitle}
                              </Styled.Link>
                            </li>
                          ),
                      )}
                    </ul>
                  </li>
                ),
              )}
          </ul>
        </Styled.Nav>
        <div>
          <Styled.Toggle
            onClick={() => toggleNav}
            icon={navOpen ? 'icon--chevron--left' : 'icon--chevron--right'}
          />
        </div>
      </Styled.Aside>
    )}
  />
);

LeftNav.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default LeftNav;
