
export type RankingProductsRequest = {
    targetType?: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
    rankType?: 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE';
  };
  
  export type ThemeProductsRequest = {
    themeKey: string;
    pageToken?: string;
    maxResults?: number;
  };
  