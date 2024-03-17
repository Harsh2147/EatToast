import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_PRODUCTS } from "../../graphql/FetchProductQuery";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { FETCH_PRODUCT_BY_ID } from "../../graphql/FetchProductById";
import { UPDATE_PRODUCT_BY_ID } from "../../graphql/UpdateProductById";
import { DELETE_PRODUCT_BY_ID } from "../../graphql/DeleteProductById";
import Header from "./Header";
function Deleteproduct() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [errorl, setError] = useState(false);
  const [deletePro, { loading1, error1, data1 }] =
    useMutation(DELETE_PRODUCT_BY_ID);
  const handleSubmit = (e) => {
    e.preventDefault();
    deletePro({
      variables: {
        proId: id,
        updated_pro: {
          Product_name: productName,
          Product_price: productPrice,
          Product_description: productDescription,
          Product_image: productImage,
          Category: category,
        },
      },
      refetchQueries: [{ query: FETCH_ALL_PRODUCTS }],
    });

    if (productName.length === 0) {
      setError(true);
    } else {
      navigate("/Viewproduct");
    }

    alert("Product Deleted Successfully");
  };
  const [user, setUser] = useState({
    category_name: "",
  });
  const { id } = useParams();
  console.log(`url parameter:${id}`);

  const { loading, error, data } = useQuery(FETCH_PRODUCT_BY_ID, {
    variables: { proId: id },
  });
  useEffect(() => {
    setProductName(localStorage.getItem("Product_name"));
    setProductPrice(localStorage.getItem("Product_price"));
    setProductDescription(localStorage.getItem("Product_description"));
    //setProductImage(localStorage.getItem("Product_image"));
    setCategory(localStorage.getItem("Category"));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <>
      <div className="container">
        <Header />
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card">
            <div className="card-header p-3">
              <h4>Add Items</h4>
            </div>
            {errorMessages.length > 0 && (
              <div style={{ color: "#e17a7a" }}>
                <ul>
                  {errorMessages.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div class="card-body">
              <form onSubmit={handleSubmit}>
                <div class="form-group mb-3">
                  <label>Product Name : {productName}</label>
                </div>
                <div class="form-group mb-3">
                  <label>Price : {productPrice}</label>
                </div>
                <div class="form-group mb-3">
                  <label>Description : {productDescription}</label>
                </div>

                <div class="form-group mb-3">
                  <label>Category : {category}</label>
                </div>
                <input
                  type="submit"
                  class="btn btn-danger "
                  value="Are your Sure to Delete this Product"
                  style={{ margin: "0 auto" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deleteproduct;
