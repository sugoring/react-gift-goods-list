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
  
  export type ThemeData = {
    id: number;
    key: string;
    label: string;
    title: string;
    description?: string;
    backgroundColor: string;
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
  
  export type ProductDetailResponse = ProductDetailData;
  
  export type ProductOption = {
    id: number;
    name: string;
    // 필요한 다른 필드들 추가
  };
  
  export type ProductOptionsResponse = {
    options: ProductOption[];
  };
  
  export type MessageCardTemplatesResponse = {
    templates: MessageCardTemplateData[];
  };
  
  export type MyAccountWishProductsResponse = {
    products: ProductData[];
    nextPageToken?: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
  };
  
  export type ChargePointResponse = void;  // Assuming no content is returned on success
  
  export type OrderProductResponse = void;  // Assuming no content is returned on success
  