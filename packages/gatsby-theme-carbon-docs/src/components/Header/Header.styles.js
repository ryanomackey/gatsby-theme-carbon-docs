import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

export const Header = styled.header`
  align-items: center;
  background-color: #171717;
  border-bottom: 1px solid #3d3d3d;
  display: flex;
  grid-area: header;
  height: 3rem;
  padding: 0 1rem;
`;

export const Link = styled(GatsbyLink)`
  color: #f3f3f3;
  font-weight: 700;
  text-decoration: none;
`;

export const Subtitle = styled.span`
  font-weight: 300;
`;

export default {
  Header,
  Link,
  Subtitle,
};
