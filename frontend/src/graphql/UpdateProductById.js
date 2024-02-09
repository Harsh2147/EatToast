import { gql } from "@apollo/client";

export const UPDATE_PRODUCT_BY_ID = gql`
  mutation Db_updateProductById($proId: ID, $updatedData: ProductDetails) {
    db_updateProductById(pro_id: $proId, updated_data: $updatedData) {
      _id
      Product_name
      Product_price
      Product_description
      Product_image
      Category
    }
  }
`;
