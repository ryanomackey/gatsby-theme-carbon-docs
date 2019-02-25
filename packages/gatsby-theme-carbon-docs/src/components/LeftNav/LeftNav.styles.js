import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';
import { Button } from 'carbon-components-react';

export const Aside = styled.aside`
  background-color: #171717;
  cursor: pointer;
  grid-area: leftNav;

  &:hover {
    background-color: ${({ navOpen }) => !navOpen && '#353535'};
    cursor: ${({ navOpen }) => !navOpen && 'pointer'};
  }
`;

export const Nav = styled.nav`
  border-right: 1px solid #3d3d3d;
  font-size: 14px;
  height: calc(100% - 30px);
  padding-top: 1rem;
`;

export const NavItem = styled.span`
  color: #bebebe;
  display: block;
  font-weight: 700;
  padding: 1rem;
`;

export const Link = styled(GatsbyLink)`
  color: #bebebe;
  display: block;
  line-height: 1.2;
  padding: 0.5rem 1rem 0.5rem 2rem;
  text-decoration: none;
  &:hover,
  &.active {
    background-color: #353535;
  }
`;

const Toggle = styled(Button)`
  min-width: 0;
  padding-right: 1rem;
  width: 100%;
`;

export default {
  Aside,
  Nav,
  NavItem,
  Link,
  Toggle,
};
