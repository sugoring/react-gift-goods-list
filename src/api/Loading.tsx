import styled from '@emotion/styled';

import logo from '@/assets/logo.png'; // 로고 이미지 경로

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const LoadingText = styled.div`
  font-size: 1.2rem;
  color: #333;
`;

export const Loading = () => (
  <LoadingWrapper>
    <Logo src={logo} alt="Loading logo" />
    <LoadingText>Loading...</LoadingText>
  </LoadingWrapper>
);
