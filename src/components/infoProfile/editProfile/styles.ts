import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  height: 14rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-content: space-between;

  div.input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    font-size: 1rem;
    input {
      background: var(--background);
      border: inherit;
      border-radius: 0.5rem;
      padding: 0.5rem;

      width: 85%;
      height: 2rem;
    }
  }

  div.buttons{
    display: flex;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;

    height: 2.2rem;
    width: 10rem;
    margin-right: 0.5rem;

    font-size: 1rem;
    background: var(--oragen-500);

    border-style: solid;
    border-radius: 0.5rem;
    border-color: var(--oragen-500);

    transition: all 0.3s;

    &+button {
      background: inherit;
      transition: all 0.3s;

      &:hover {
        background: var(--oragen-500);
      }
    }

    &:hover {
      background: inherit;

    }

  }
`;
