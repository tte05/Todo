import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)<{ $completed?: boolean }>`
  text-decoration: none;
  padding-block: 10px;
  font-size: 20px;
  font-weight: 600;

  ${({ $completed }) =>
    $completed
      ? css`
          color: green;
        `
      : css`
          color: red;
        `}
`;