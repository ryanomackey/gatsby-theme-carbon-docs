import React from 'react';
import PropTypes from 'prop-types';

import Styled from './TableOfContents.styles';

const linkify = value =>
  value
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/, '');

const TableOfContents = ({ headings }) => {
  if (!headings || !headings.length) {
    return null;
  }

  return (
    <Styled.Container>
      <Styled.Title>Table of Contents</Styled.Title>
      <ul>
        {headings.map(({ value, depth }) => (
          <Styled.ListItem depth={depth} key={`${value}-${Math.random()}`}>
            <Styled.Link href={`#${linkify(value)}`}>{value}</Styled.Link>
          </Styled.ListItem>
        ))}
      </ul>
    </Styled.Container>
  );
};

TableOfContents.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TableOfContents;
