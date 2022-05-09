import styled from 'styled-components';

export const Container = styled.header`
  background: var(--secondary);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    a {
      padding: 0 1rem;
      color: var(--text-color);
      transition: 0.2s;

      &:hover {
        background: var(--oragen-500);
        border-radius: 0.5rem;
      }
    }


  }

  div.content-right{
      display: flex;
      align-items: center;
  }

  img {
    height: 3rem;
  }
`;
