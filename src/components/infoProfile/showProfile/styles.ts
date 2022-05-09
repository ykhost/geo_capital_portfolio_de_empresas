import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 14rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-content: space-between;

  span {
  display: block;
  font-weight: 600;
  }

  span+span{
    font-weight: 400;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    font-size: 1rem;

    height: 2.2rem;
    width: 10rem;
    background: inherit;
    border-style: solid;
    border-radius: 0.5rem;
    border-color: var(--oragen-500);

    transition: all 0.3s;
    &:hover {
      background: var(--oragen-500);
    }
  }
`;
