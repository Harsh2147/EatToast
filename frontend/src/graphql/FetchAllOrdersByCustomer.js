import { gql } from "@apollo/client";

export const FETCH_ALL_ORDERS_BY_CUSTOMER = gql`
  query Query($customerId: ID) {
    getOrderByCusomerId_db(CustomerId: $customerId) {
      _id
      CustomerFirstname
      CustomerLastname
      CustomerMobile
      Product_name
      Product_price
      Quantity
      TotalPriceWithTax
      Date
      CurrentDate
      DeliveryType
      PaymentBy
      CustomerId
      Time
    }
  }
`;
