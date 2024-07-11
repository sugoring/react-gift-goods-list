import styled from '@emotion/styled';

import { Loading } from '@/api/Loading';
import { NoData } from '@/api/NoData';
import { useFetch } from '@/api/useFetch';
import { DefaultItems } from '@/components/common/Item/Default';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';
import type { ProductData } from '@/types';

type Props = {
  themeKey: string;
};

export const ProductSection = ({ themeKey }: Props) => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch<{ products: ProductData[] }>(`/api/v1/themes/${themeKey}/products`, {
    maxResults: 20,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error || !products || products.products.length === 0) {
    return <NoData />;
  }

  return (
    <Wrapper>
      <Container>
        <Grid
          columns={{
            initial: 2,
            md: 4,
          }}
          gap={16}
        >
          {products.products.map(({ id, imageURL, name, price, brandInfo }) => (
            <DefaultItems
              key={id}
              imageSrc={imageURL}
              title={name}
              amount={price.sellingPrice}
              subtitle={brandInfo.name}
            />
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 28px 16px 180px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 40px 16px 360px;
  }
`;
