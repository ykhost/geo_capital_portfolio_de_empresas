import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0.5 2rem;
  margin: 0 auto;
  margin-top: 4rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .nameSection {
    .h1 {
      display: flex;
      align-items: center;
      h2 {
        font-size: 2rem;
        display: inline;
        margin-right: 1rem;
      }

      span {
        display: inline;
        background: #7d7d7d;
        border-radius: 0.5rem;
        padding: 0.312rem 0.625rem;
        color: #ffff;
      }
    }
  }

  .priceSection {
    display: flex;
    align-items: center;

    span{
      font-size: 2rem;
      font-weight: 600;
      margin-right: 1rem;
    }

    span + span {
      font-size: 1rem;
      border-radius: 0.5rem;
      padding: 0.312rem 0.625rem;
      color: #ffff;
      &.up{
        background: var(--green-500);
      }
      &.down{
        background: var(--red-500);
      }
    }
  }


`;
