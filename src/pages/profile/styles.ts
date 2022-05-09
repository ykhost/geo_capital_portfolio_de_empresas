import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.5rem 1rem;

  div.title-content {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;

    span {
      text-align: center;
      background: var(--oragen-500);
      width: 1.2rem;
      height: 0.7rem;
      border-radius: 0.2rem;
    }
  }
  div.content {
    margin-top: 1rem;
    background: var(--secondary);
    border-radius: 0.5rem;
    padding: 5rem 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    div.photo{
      width: 8rem;

      button.photoIcon {
        position: relative;
        width: 14rem;
        height: 14rem;
        border-radius: 0.5rem;
        border: none;
        background-size: cover;
        padding: 1rem;
        display: flex;
        justify-content: start;
        align-items: flex-start;
        color: var(--oragen-500);
        font-size: 2rem;

        transition: all 0.2s;
        &:hover {
          filter: brightness(0.7)
        }
      }
    }
  }
`
