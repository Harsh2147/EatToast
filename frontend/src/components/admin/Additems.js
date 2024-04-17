import React, { useEffect, useState, useRef } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { UPLOAD_IMAGE } from "../../graphql/Uploadimg";
import { INSERT_PRODUCTS_MUTATION } from "../../graphql/InsertProcMutation";
import Header from "./Header";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { initializeApp } from "firebase/app";
//import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNkll0obirU-CvSxzotZKs3kfYEvN9DQE",
  authDomain: "clothingstore-a76eb.firebaseapp.com",
  databaseURL: "https://clothingstore-a76eb-default-rtdb.firebaseio.com",
  projectId: "clothingstore-a76eb",
  storageBucket: "clothingstore-a76eb.appspot.com",
  messagingSenderId: "369833662928",
  appId: "1:369833662928:web:44e546dc70a58709b001d5",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Additems() {
  const fileInput = useRef();
  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    Product_name: "",
    Product_price: "",
    Product_description: "",
    Category: "",
    Product_image: "",
  });
  const [errorMessages, setErrorMessages] = useState([]);

  const [uploadImage] = useMutation(UPLOAD_IMAGE);
  const [createProducts] = useMutation(INSERT_PRODUCTS_MUTATION);

  const { loading, error, data } = useQuery(FETCH_ALL_CATEGORIES);

  const handleInputChange = (event) => {
    setProductDetails({
      ...productDetails,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytesResumable(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const validateForm = () => {
    const errors = [];

    if (!productDetails) {
      errors.push("Product Name is required");
    }

    setErrorMessages(errors);
    return errors.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = fileInput.current.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytesResumable(storageRef, file);
    const productImage = await getDownloadURL(storageRef);

    // Update the Product_image field in the productDetails state
    setProductDetails({
      ...productDetails,
      Product_image: productImage,
    });

    if (validateForm()) {
      createProducts({
        variables: {
          productName: productDetails.Product_name,
          productPrice: parseFloat(productDetails.Product_price),
          productDescription: productDetails.Product_description,
          productImage: productImage,
          category: productDetails.Category,
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
                    class="form-control"
                    type="text"
                    name="Product_name"
                    placeholder="Product Name"
                    onChange={handleInputChange}
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Price</label>
                  <input
                    class="form-control"
                    type="number"
                    name="Product_price"
                    placeholder="Product Price"
                    onChange={handleInputChange}
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Description</label>
                  <input
                    class="form-control"
                    type="text"
                    name="Product_description"
                    placeholder="Product Description"
                    onChange={handleInputChange}
                  />
                </div>
                <div class="form-group mb-3">
                  <label>Image</label>
                  <input
                    class="form-control"
                    type="file"
                    onChange={handleImageUpload}
                    ref={fileInput}
                  />
                </div>

                <div class="form-group mb-3">
                  <label>Category</label>
                  <select
                    id="Category"
                    className="form-control"
                    type="text"
                    name="Category"
                    onChange={handleInputChange}
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
