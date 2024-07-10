export type ProductData = {
    id: number;
    name: string;
    imageURL: string;
    wish: {
      wishCount: number;
      isWished: boolean;
    };
    price: {
      basicPrice: number;
      discountRate: number;
      sellingPrice: number;
    };
    brandInfo: {
      id: number;
      name: string;
      imageURL: string;
    };
  };
  
  export type ThemeData = {
    id: number;
    key: string;
    label: string;
    title: string;
    description?: string;
    backgroundColor: string;
  };
  
  export type RankingProductsResponse = {
    products: ProductData[];
  };
  
  export type ThemesResponse = {
    themes: ThemeData[];
  };
  
  export type ThemeProductsResponse = {
    products: ProductData[];
    nextPageToken?: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
  };
  
  export type ProductDetailData = ProductData & {
    isAccessableProductPage: boolean;
    review: {
      averageRating: number;
      totalReviewCount: number;
    };
    productDescription: {
      images: string[];
    };
    productDetailInfo: {
      announcements: {
        displayOrder: number;
        name: string;
        value: string;
      }[];
      terms: {
        displayOrder: number;
        title: string;
        description: string;
      }[];
    };
  };
  
  export type MessageCardTemplateData = {
    id: number;
    defaultTextMessage: string;
    thumbURL: string;
    imageURL: string;
  };
  
  export type MyAccountInfoData = {
    id: number;
    name: string;
    birthday: string;
    profileImageURL: string;
    point: number;
  };
  