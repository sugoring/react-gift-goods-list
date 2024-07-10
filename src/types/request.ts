export type RankingProductsRequest = {
    targetType?: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
    rankType?: 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE';
  };
  
  export type ThemeProductsRequest = {
    themeKey: string;
    pageToken?: string;
    maxResults?: number;
  };
  
  export type ProductDetailRequest = {
    productId: string;
  };
  
  export type ProductOptionsRequest = {
    productId: string;
  };
  
  export type MyAccountWishProductsRequest = {
    pageToken?: string;
    maxResults?: number;
  };
  
  export type ChargePointRequest = {
    point: number;
  };
  
  export type OrderProductRequest = {
    productId: number;
    productOptionId: number;
    productQuantity: number;
    messageCardTemplateId: number;
    messageCardTextMessage: string;
    senderId: number;
    receiverId: number;
    hasCashReceipt: boolean;
    cashReceiptType?: 'PERSONAL' | 'BUSINESS';
    cashReceiptNumber?: string;
  };
  