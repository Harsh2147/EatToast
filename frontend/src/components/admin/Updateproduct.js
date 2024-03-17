import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_PRODUCTS } from "../../graphql/FetchProductQuery";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { FETCH_PRODUCT_BY_ID } from "../../graphql/FetchProductById";
import { UPDATE_PRODUCT_BY_ID } from "../../graphql/UpdateProductById";
import Header from "./Header";
function Updateproduct() {
  const navigate = useNavigate();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const { loadingCat, errorCat, data } = useQuery(FETCH_ALL_CATEGORIES);
  const [errorl, setError] = useState(false);
  const [updatePro, { loading1, error1, data1 }] =
    useMutation(UPDATE_PRODUCT_BY_ID);
  const handleSubmit = (e) => {
    e.preventDefault();
    updatePro({
      variables: {
        proId: id,
        updatedData: {
          Product_name: productName,
          Product_price: parseFloat(productPrice),
          Product_description: productDescription,
          Product_image: productImage,
          Category: category,
        },
      },
      refetchQueries: [{ query: FETCH_ALL_PRODUCTS }],
    });

    navigate("/Viewproduct");

    alert("Product Updated Successfully");
  };
  const { id } = useParams();
  console.log("url parameter:${id}");

  const { loading, error, dataproduct } = useQuery(FETCH_PRODUCT_BY_ID, {
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
  if (loadingCat) return <p>Loading categories...</p>;

  console.log("DataCat:", data);

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
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.files[0])}
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

                    {data && data.getAllCategory_db && (
                      <>
                        {data.getAllCategory_db.map((cat) => (
                          <option key={cat._id} value={cat.category_name}>
                            {cat.category_name}
                          </option>
                        ))}
                      </>
                    )}
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

export default Updateproduct;
