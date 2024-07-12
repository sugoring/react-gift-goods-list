import styled from '@emotion/styled';

const NoDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

type NoDataProps = {
  message?: string;
};

export const NoData = ({ message = '데이터가 없습니다' }: NoDataProps) => (
  <NoDataWrapper>
    <div>{message}</div>
  </NoDataWrapper>
);
