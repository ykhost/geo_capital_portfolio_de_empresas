import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    background: var(--secondary);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    border-radius: 0.3rem;
    border-collapse: collapse;

    th {
      color: var(--title-color);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
      border: 2px;

    }

    tr.content {
      transition: 0.4s;
      border: 1px;
      border: 1px solid var(--border-color);
      border-width: 1px 0px;
    }

    tr.content:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 24px;
    }

    tr:last-child {
      border-bottom: 0;
    }

    td {
      padding: 1rem 2rem;
      border: 0;

      color: var(--text-color);

      &:first-child {
        color: var(--text-color);
      }

      &.up{
        color: var(--green-500);
      }

      &.down{
        color: var(--red-500);
      }

      button {
        height: 2rem;
        font-size: 1.5rem;
        border: 0;
        background: inherit;

        color: var(--oragen-500);
      }

      button:hover{
        filter: contrast(200%);
      }
    }
  }
`;
