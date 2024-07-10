import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { fetchThemeProduct } from '@/api/themeApi';
import { DefaultItems } from '@/components/common/Item/Default';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';
import type { ProductData } from '@/types';

type Props = {
  themeKey: string;
};

export const ProductSection = ({ themeKey }: Props) => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchThemeProduct(themeKey, 20); // Request 20 products
        setProducts(data.products);
      } catch (error) {
        console.error('Failed to fetch theme products', error);
      }
    };

    getProducts();
  }, [themeKey]);

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
          {products.map(({ id, imageURL, name, price, brandInfo }) => (
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
