import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

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
  const [data, setData] = useState<ProductData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const loader = useRef<HTMLDivElement | null>(null);

  const fetchProducts = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(`/api/v1/themes/${themeKey}/products`, {
        params: {
          maxResults: 20,
          pageToken: page,
        },
      });
      setData((prevData) => [...prevData, ...response.data.products]);
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

  useEffect(() => {
    fetchProducts(page);
  }, [page, themeKey]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  if (error) {
    return <NoData message={error} />;
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
          {data.map(({ id, imageURL, name, price, brandInfo }) => (
            <DefaultItems
              key={id}
              imageSrc={imageURL}
              title={name}
              amount={price.sellingPrice}
              subtitle={brandInfo.name}
            />
          ))}
        </Grid>
        {isLoading && <Loading />}
        <div ref={loader} />
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
