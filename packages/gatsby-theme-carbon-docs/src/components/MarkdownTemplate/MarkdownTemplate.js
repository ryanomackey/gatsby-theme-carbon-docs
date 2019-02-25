import React from 'react';
import PropTypes from 'prop-types';
import { MDXProvider } from '@mdx-js/tag';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout from '../Layout';
import TableOfContents from '../TableOfContents';
import EditLink from '../EditLink';

import { a, inlineCode, pre } from './components';

import Styled from './MarkdownTemplate.styles';

const components = {
  a,
  inlineCode,
  pre,
};

const MarkdownTemplate = ({
  pageContext: { body, headings, frontmatter, fileAbsolutePath },
}) => (
  <Layout>
    <Styled.Container>
      <Styled.Header>
        <Styled.Title>{frontmatter.title}</Styled.Title>
        <EditLink fileAbsolutePath={fileAbsolutePath} />
      </Styled.Header>
      <TableOfContents headings={headings} />
      <Styled.Markdown>
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
      </Styled.Markdown>
    </Styled.Container>
  </Layout>
);

MarkdownTemplate.propTypes = {
  pageContext: PropTypes.shape().isRequired,
};

export default MarkdownTemplate;
