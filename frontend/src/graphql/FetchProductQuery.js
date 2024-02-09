import { gql } from "@apollo/client";

export const FETCH_ALL_PRODUCTS = gql`
  query GetAllProducts_db {
    getAllProducts_db {
      _id
      Product_name
      Product_price
      Product_description
      Product_image
      Category
    }
  }
`;
