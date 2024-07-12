import styled from '@emotion/styled';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Loading = () => (
  <LoadingWrapper>
    <div>Loading...</div>
  </LoadingWrapper>
);
