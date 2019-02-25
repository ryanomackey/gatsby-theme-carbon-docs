import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem 0;
  max-width: 770px;
`;

const Title = styled.h4`
  border-bottom: 1px solid #171717;
  margin: 1rem;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
  margin-left: ${({ depth }) => `${depth}rem`};
`;

const Link = styled.a`
  text-decoration: none;
`;

export default {
  Container,
  Title,
  ListItem,
  Link,
};
