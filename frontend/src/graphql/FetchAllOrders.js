import { gql } from "@apollo/client";

export const FETCH_All_ORDERS = gql`
  query Query {
    getAllOrder_db {
      _id
      TotalPriceWithTax
      Quantity
      Product_price
      Product_name
      PaymentBy
      DeliveryType
      Date
      Time
      CustomerMobile
      CustomerLastname
      CustomerId
      CustomerFirstname
      CurrentDate
    }
  }
`;
