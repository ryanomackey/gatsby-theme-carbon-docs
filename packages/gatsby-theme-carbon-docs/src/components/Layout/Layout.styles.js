import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${({ navOpen }) => (navOpen ? '255px' : '2.5rem')} 1fr;
  grid-template-rows: 3rem auto;
  grid-template-areas:
    'header header'
    'leftNav main';
  height: 100vh;
`;

export const Main = styled.main`
  overflow: auto;
`;

export default {
  Container,
  Main,
};
