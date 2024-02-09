import { gql } from "@apollo/client";

export const INSERT_PRODUCTS_MUTATION = gql`


mutation Mutation($productInput: ProductDetails) {
    createProducts(productInput: $productInput) {
      _id
      Product_name
      Product_price
      Product_description
      Product_image
      Category
    }
  }
  
`