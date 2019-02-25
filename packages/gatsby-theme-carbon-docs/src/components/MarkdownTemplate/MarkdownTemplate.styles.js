import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 5%;
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: inline-block;
  margin-bottom: 1rem;
`;

export const Markdown = styled.div`
  max-width: 770px;
  margin-top: 3rem;

  body > *:first-child {
    margin-top: 0 !important;
  }

  body > *:last-child {
    margin-bottom: 0 !important;
  }

  a {
    color: #4183c4;
    text-decoration: none;
  }

  a.absent {
    color: #cc0000;
  }

  a.anchor {
    display: block;
    padding-left: 30px;
    margin-left: -60px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 2.5rem 0 1rem;
    padding: 0;
    font-weight: bold;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    position: relative;
  }

  h2:first-child,
  h1:first-child,
  h1:first-child + h2,
  h3:first-child,
  h4:first-child,
  h5:first-child,
  h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  h1:hover a.anchor,
  h2:hover a.anchor,
  h3:hover a.anchor,
  h4:hover a.anchor,
  h5:hover a.anchor,
  h6:hover a.anchor {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    a.anchor {
      svg {
        visibility: hidden;
      }
    }

    &:hover {
      a.anchor {
        svg {
          visibility: visible;
        }
      }
    }
  }

  h1 tt,
  h1 code {
    font-size: inherit;
  }

  h2 tt,
  h2 code {
    font-size: inherit;
  }

  h3 tt,
  h3 code {
    font-size: inherit;
  }

  h4 tt,
  h4 code {
    font-size: inherit;
  }

  h5 tt,
  h5 code {
    font-size: inherit;
  }

  h6 tt,
  h6 code {
    font-size: inherit;
  }

  h1 {
    font-size: 28px;
    color: black;
  }

  h2 {
    font-size: 24px;
    border-bottom: 1px solid #cccccc;
    color: black;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 16px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    color: #777777;
    font-size: 14px;
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  li,
  table,
  pre {
    margin: 15px 0;
  }

  hr {
    border: 0 none;
    color: #cccccc;
    height: 4px;
    padding: 0;
  }

  body > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  body > h1:first-child + h2 {
    margin-top: 0;
    padding-top: 0;
  }

  body > h3:first-child,
  body > h4:first-child,
  body > h5:first-child,
  body > h6:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  a:first-child h1,
  a:first-child h2,
  a:first-child h3,
  a:first-child h4,
  a:first-child h5,
  a:first-child h6 {
    margin-top: 0;
    padding-top: 0;
  }

  h1 p,
  h2 p,
  h3 p,
  h4 p,
  h5 p,
  h6 p {
    margin-top: 0;
  }

  li p.first {
    display: inline-block;
  }

  ul,
  ol {
    padding-left: 30px;
  }

  ul :first-child,
  ol :first-child {
    margin-top: 0;
  }

  ul :last-child,
  ol :last-child {
    margin-bottom: 0;
  }

  dl {
    padding: 0;
  }

  dl dt {
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
    padding: 0;
    margin: 15px 0 5px;
  }

  dl dt:first-child {
    padding: 0;
  }

  dl dt > :first-child {
    margin-top: 0;
  }

  dl dt > :last-child {
    margin-bottom: 0;
  }

  dl dd {
    margin: 0 0 15px;
    padding: 0 15px;
  }

  dl dd > :first-child {
    margin-top: 0;
  }

  dl dd > :last-child {
    margin-bottom: 0;
  }

  blockquote {
    border-left: 4px solid #dddddd;
    padding: 0 15px;
    color: #777777;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    padding: 0;
  }
  table tr {
    border-top: 1px solid #cccccc;
    background-color: white;
    margin: 0;
    padding: 0;
  }

  table tr:nth-child(2n) {
    background-color: #f8f8f8;
  }

  table tr th {
    font-weight: bold;
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr td {
    border: 1px solid #cccccc;
    text-align: left;
    margin: 0;
    padding: 6px 13px;
  }

  table tr th :first-child,
  table tr td :first-child {
    margin-top: 0;
  }

  table tr th :last-child,
  table tr td :last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
  }

  span.frame {
    display: block;
    overflow: hidden;
  }

  span.frame > span {
    border: 1px solid #dddddd;
    display: block;
    float: left;
    overflow: hidden;
    margin: 13px 0 0;
    padding: 7px;
    width: auto;
  }

  span.frame span img {
    display: block;
    float: left;
  }

  span.frame span span {
    clear: both;
    color: #333333;
    display: block;
    padding: 5px 0 0;
  }

  span.align-center {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-center > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: center;
  }

  span.align-center span img {
    margin: 0 auto;
    text-align: center;
  }

  span.align-right {
    display: block;
    overflow: hidden;
    clear: both;
  }

  span.align-right > span {
    display: block;
    overflow: hidden;
    margin: 13px 0 0;
    text-align: right;
  }

  span.align-right span img {
    margin: 0;
    text-align: right;
  }

  span.float-left {
    display: block;
    margin-right: 13px;
    overflow: hidden;
    float: left;
  }

  span.float-left span {
    margin: 13px 0 0;
  }

  span.float-right {
    display: block;
    margin-left: 13px;
    overflow: hidden;
    float: right;
  }

  span.float-right > span {
    display: block;
    overflow: hidden;
    margin: 13px auto 0;
    text-align: right;
  }

  .gatsby-code-title {
    background-color: #171717;
    border-bottom: 1px solid white;
    color: white;
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }

  .gatsby-highlight-code-line {
    background-color: #565656;
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid #fa75a6;
  }

  // Syntax highlighting
  code[class*='language-'],
  pre[class*='language-'] {
    border-radius: 0;
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    margin-top: 0;
    font-family: 'ibm-plex-mono' !important;
    position: relative;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #171717;
    border-radius: 0;

    &::before {
      position: absolute;
      top: 0.25rem;
      right: 0.25rem;
      color: #171717;
      background-color: #f3f3f3;
      text-align: center;
      padding: 0 0.5rem;
    }
  }

  pre[class*='language-bash']::before {
    content: 'bash';
  }

  pre[class*='language-sh']::before {
    content: 'sh';
  }

  pre[class*='language-shell']::before {
    content: 'shell';
  }

  pre[class*='language-css']::before {
    content: 'css';
  }

  pre[class*='language-diff']::before {
    content: 'diff';
  }

  pre[class*='language-graphql']::before {
    content: 'GraphQL';
  }

  pre[class*='language-html']::before {
    content: 'html';
  }

  pre[class*='language-js']::before,
  pre[class*='language-javascript']::before {
    content: 'js';
  }

  pre[class*='language-jsx']::before {
    content: 'jsx';
  }

  pre[class*='language-json']::before {
    content: 'json';
  }

  pre[class*='language-markdown']::before {
    content: 'md';
  }

  pre[class*='language-yaml']::before {
    content: 'yaml';
  }

  pre[class*='language-text']::before {
    content: 'text';
  }

  .token.comment {
    color: #bebebe !important;
  }

  .token.tag {
    color: #6ea6ff !important;
  }

  .token.string {
    color: #fa75a6 !important;
  }

  .token.attr-name,
  .token.property,
  .token.function {
    color: #92eeee !important;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit,
  .token.selector {
    color: #bb8eff !important;
  }

  .token.variable {
    color: #ffffff !important;
  }

  .token.inserted {
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c94922;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #c94922;
    outline-offset: 0.4em;
  }

  /* overrides color-values for the Line Numbers plugin
  * http://prismjs.com/plugins/line-numbers/
  */
  .line-numbers .line-numbers-rows {
    border-right-color: #dfe3e6;
  }

  .line-numbers-rows > span:before {
    color: #687985;
  }

  /* overrides color-values for the Line Highlight plugin
  * http://prismjs.com/plugins/line-highlight/
  */
  .line-highlight {
    background: rgba(107, 115, 148, 0.2);
    background: -webkit-linear-gradient(
      left,
      rgba(107, 115, 148, 0.2) 70%,
      rgba(107, 115, 148, 0)
    );
    background: linear-gradient(
      to right,
      rgba(107, 115, 148, 0.2) 70%,
      rgba(107, 115, 148, 0)
    );
  }
`;

export default {
  Container,
  Header,
  Title,
  Markdown,
};
