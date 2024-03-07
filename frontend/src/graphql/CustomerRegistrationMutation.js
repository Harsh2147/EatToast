import { gql } from "@apollo/client";

export const CUSTOMER_REGISTRATION_MUTATION = gql`
  mutation Mutation($customerInput: CustomerInput) {
    signupCustomer(CustomerInput: $customerInput) {
      email
      _id
      Password
      Mobile
      Lastname
      Firstname
    }
  }
`;
