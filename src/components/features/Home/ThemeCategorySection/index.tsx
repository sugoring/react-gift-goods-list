// src/components/features/Home/ThemeCategorySection/index.tsx
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Loading } from '@/api/Loading';
import { NoData } from '@/api/NoData';
import { useFetch } from '@/api/useFetch';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { getDynamicPath } from '@/routes/path';
import { breakpoints } from '@/styles/variants';
import type { ThemeData } from '@/types';

import { ThemeCategoryItem } from './ThemeCategoryItem';

export const ThemeCategorySection = () => {
  const { data: themes, isLoading, error } = useFetch<ThemeData[]>('/api/v1/themes');

  if (isLoading) {
    return <Loading />;
  }

  if (error || !themes || themes.length === 0) {
    return <NoData />;
  }

  return (
    <Wrapper>
      <Container>
        <Grid
          columns={{
            initial: 4,
            md: 6,
          }}
        >
          {themes.map((theme) => (
            <Link key={theme.id} to={getDynamicPath.theme(theme.key)}>
              <ThemeCategoryItem image={theme.imageURL} label={theme.name} />
            </Link>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 14px 14px 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 45px 52px 23px;
  }
`;
