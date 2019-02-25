import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';

import {
  getLanguage,
  getTitle,
  getHighlights,
  getFlatHighlights,
  isHighlighted,
} from '../utils/prism-helpers';

const pre = ({
  children: {
    props: {
      props: { className },
      children,
    },
  },
}) => {
  const lang = getLanguage(className);
  const title = getTitle(className);
  const highlights = getHighlights(className);
  const flatHighlights = getFlatHighlights(highlights);

  return (
    <>
      {title && <div className="gatsby-code-title">{title}</div>}
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={lang}
        theme={undefined}
      >
        {({
          className: highlightClassName,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre className={highlightClassName} style={style}>
            {tokens.map((line, i) => (
              <div
                {...getLineProps({ line, key: i })}
                {...isHighlighted(i + 1, flatHighlights)}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </>
  );
};

pre.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default pre;
