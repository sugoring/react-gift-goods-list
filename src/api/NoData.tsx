import styled from '@emotion/styled';

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const NoData = () => (
  <NoDataWrapper>
    <div>데이터가 없습니다</div>
  </NoDataWrapper>
);
