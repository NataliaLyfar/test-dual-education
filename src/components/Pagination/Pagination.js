import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  margin: 0 auto ${p => p.theme.space[3]}px;
  width: 370px;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 7px;
  padding: 0;
  & li {
    min-width: 30px;
    min-height: 30px;
    text-align: center;
    padding: ${p => p.theme.space[0]}px ${p => p.theme.space[0]}px;
    border-radius: 2px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${p => p.theme.colors.accent};
      cursor: pointer;
    }
  }
`;
