import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { INSERT_PRODUCTS_MUTATION } from "../../graphql/InsertProcMutation";
import Header from "./Header";
function Additems() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [category, setCategory] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const { loading, error, data } = useQuery(FETCH_ALL_CATEGORIES);

  const [createProducts] = useMutation(INSERT_PRODUCTS_MUTATION);
  const validateForm = () => {
    const errors = [];

    if (!productName) {
      errors.push("Product Name is required");
    }
    if (!productPrice) {
      errors.push("Product Price is required");
    }
    if (!productDescription) {
      errors.push("Product Description is required");
    }
    if (!productImage) {
      errors.push("Product Image is required");
    }
    if (!category) {
      errors.push("Category is required");
    }
    setErrorMessages(errors);
    return errors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      createProducts({
        variables: {
          productInput: {
            Product_name: productName,
            Product_price: parseFloat(productPrice),
            Product_description: productDescription,
            Product_image: productImage,
            Category: category,
          },
        },
      });

      navigate("/Viewproduct");

      alert("Product Added Successfully");
    }
  };

  //   if (loading)
  //     return (
  //       <h2>
  //         ` Data is Loading <br /> ${error}`
  //       </h2>
  //     );

  if (error) {
    console.error("Error fetching categories:", error.message);
  }

  if (!data || !data.getAllCategory_db) {
    console.error("No data or empty data returned for categories.");
  }

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
                  <label>Product Name</label>
                  <input
                    type="text"
                    id="ProductName"
                    className="form-control"
                    name="ProductName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="productprice"
                    name="productprice"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Description</label>
                  <input
                    type="text"
                    id="productdescription"
                    className="form-control"
                    name="productdescription"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Image</label>
                  <input
                    type="file"
                    id="productImage"
                    className="form-control"
                    name="productImage"
                    onChange={(e) => setProductImage(e.target.value)}
                  />
                </div>

                <div class="form-group mb-3">
                  <label>Category</label>
                  <select
                    id="Category"
                    className="form-control"
                    type="text"
                    name="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">Select Category</option>

                    {data?.getAllCategory_db.map((cat) => (
                      <option key={cat._id} value={cat.category_name}>
                        {" "}
                        {cat.category_name}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="submit"
                  class="btn btn-primary "
                  value="Submit"
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

export default Additems;
