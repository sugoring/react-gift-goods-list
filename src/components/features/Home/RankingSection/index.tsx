// src/components/features/Home/RankingSection/index.tsx
import styled from '@emotion/styled';
import { useState } from 'react';

import { Loading } from '@/api/Loading';
import { NoData } from '@/api/NoData';
import { useFetch } from '@/api/useFetch';
import { Container } from '@/components/common/layouts/Container';
import { breakpoints } from '@/styles/variants';
import type { ProductData, RankingFilterOption } from '@/types';

import { RankingFilter } from './Filter';
import { RankingList } from './List';

export const RankingSection = () => {
  const [filterOption, setFilterOption] = useState<RankingFilterOption>({
    targetType: 'ALL',
    rankType: 'MANY_WISH',
  });
  const {
    data: productList,
    isLoading,
    error,
  } = useFetch<ProductData[]>('/api/v1/ranking/products', filterOption);

  if (isLoading) {
    return <Loading />;
  }

  if (error || !productList || productList.length === 0) {
    return <NoData />;
  }

  return (
    <Wrapper>
      <Container>
        <Title>실시간 급상승 선물랭킹</Title>
        <RankingFilter filterOption={filterOption} onFilterOptionChange={setFilterOption} />
        <RankingList ProductList={productList} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0 16px 32px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 0 16px 80px;
  }
`;

const Title = styled.h2`
  color: #000;
  width: 100%;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;

  @media screen and (min-width: ${breakpoints.sm}) {
    text-align: center;
    font-size: 35px;
    line-height: 50px;
  }
`;
