import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';

import axiosInstance from '@/api/axiosInstance';
import { Loading } from '@/api/Loading';
import { NoData } from '@/api/NoData';
import { DefaultItems } from '@/components/common/Item/Default';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';
import type { ProductData } from '@/types';

type Props = {
  themeKey: string;
};

export const ProductSection = ({ themeKey }: Props) => {
  const [data, setData] = useState<{ products: ProductData[] } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(`/api/v1/themes/${themeKey}/products`, {
          params: {
            maxResults: 20,
          },
        });
        setData(response.data);
      } catch (err) {
        if (axios.isAxiosError(err) && err.response) {
          setError(`Error ${err.response.status}: ${err.response.data.message}`);
        } else {
          setError('An error occurred while fetching data.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [themeKey]); // useEffect will run whenever themeKey changes

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <NoData message={error} />;
  }

  if (!data || !Array.isArray(data.products) || data.products.length === 0) {
    return <NoData />;
  }

  const { products } = data;

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
