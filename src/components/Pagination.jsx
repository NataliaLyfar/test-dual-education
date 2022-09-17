const { default: styled } = require('styled-components');

export const Pagination = ({ page, totalPages, onLeftClick, onRightClick }) => {
  return (
    <PaginationWrapper>
      <button onClick={onLeftClick}>
        <div>◀️</div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div>▶️</div>
      </button>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
