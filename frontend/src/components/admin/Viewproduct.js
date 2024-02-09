import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FETCH_ALL_PRODUCTS } from "../../graphql/FetchProductQuery";
import { Link } from "react-router-dom";
function Viewproduct() {
  const [showCategorySubMenu, setShowCategorySubMenu] = useState(false);
  const [showItemsSubMenu, setShowItemsSubMenu] = useState(false);
  const [showOrdersSubMenu, setShowOrdersSubMenu] = useState(false);

  const handleManageCategoryClick = (event) => {
    event.preventDefault();
    setShowCategorySubMenu(!showCategorySubMenu);
  };

  const handleManageItemsClick = (event) => {
    event.preventDefault();
    setShowItemsSubMenu(!showItemsSubMenu);
  };
  const handleManageOrdersClick = (event) => {
    event.preventDefault();
    setShowOrdersSubMenu(!showOrdersSubMenu);
  };
  const { loading, error, data } = useQuery(FETCH_ALL_PRODUCTS);
  const [search, setSearch] = useState("");
  //   if (loading)
  //     return (
  //       <h2>
  //         ` Data is Loading <br /> ${error}`
  //       </h2>
  //     );

  if (error) {
    console.error("Error fetching Products:", error.message);
  }

  if (!data || !data.getAllCategory_db) {
    console.error("No data or empty data returned for Products.");
  }
  const setData = (product) => {
    let {
      Product_name,
      _id,
      Product_price,
      Product_description,
      Product_image,
      Category,
    } = product;
    console.log("ID" + _id);
    localStorage.setItem("id", _id);
    localStorage.setItem("Product_name", Product_name);
    localStorage.setItem("Product_price", Product_price);
    localStorage.setItem("Product_description", Product_description);
    localStorage.setItem("Product_image", Product_image);
    localStorage.setItem("Category", Category);
  };
  return (
    <>
      <div className="container">
        <div class="admin-navigation">
          <ul>
            <li>
              <a href="#">
                <span class="title">EatToast</span>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Dashboard">Dashboard</a>
                </span>
              </a>
            </li>
            <li className="manage-category">
              <a href="#" onClick={handleManageCategoryClick}>
                <span className="icon">
                  <ion-icon name="fast-food-outline"></ion-icon>
                </span>
                <span className="title">Manage Category</span>
              </a>
            </li>
            {showCategorySubMenu && (
              <>
                <ul>
                  <li>
                    <a href="/Addcategory">
                      <span className="title">Add Category</span>
                    </a>
                  </li>
                  <li>
                    <a href="/Viewcategory">
                      <span className="title">View Category</span>
                    </a>
                  </li>
                </ul>
              </>
            )}
            <li className="manage-items">
              <a href="#" onClick={handleManageItemsClick}>
                <span className="icon">
                  <ion-icon name="restaurant"></ion-icon>
                </span>
                <span className="title">Manage Items</span>
              </a>
            </li>
            {showItemsSubMenu && (
              <>
                <ul>
                  <li>
                    <a href="/Additems">
                      <span className="title">Add Items</span>
                    </a>
                  </li>
                  <li>
                    <a href="/Viewproduct">
                      <span className="title">View Product</span>
                    </a>
                  </li>
                </ul>
              </>
            )}
            <li className="manage-orders">
              <a href="#" onClick={handleManageOrdersClick}>
                <span className="icon">
                  <ion-icon name="cart-outline"></ion-icon>
                </span>
                <span className="title">Manage Orders</span>
              </a>
            </li>
            {showOrdersSubMenu && (
              <>
                <ul>
                  <li>
                    <a href="/Vieworders">
                      {" "}
                      <span className="title">View Order</span>
                    </a>
                  </li>
                </ul>
              </>
            )}

            <li>
              <a href="#">
                <span class="icon">
                  <ion-icon name="exit-outline"></ion-icon>
                </span>
                <span class="title">
                  <a href="/Login">Log out</a>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="main">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 mx-1">
                <div className="input-group mx-4">
                  <input
                    id="search"
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="productbox">
            {data?.getAllProducts_db
              .filter((product) => {
                return search.toLocaleLowerCase() === ""
                  ? product
                  : product.Product_name.toLocaleLowerCase().includes(search) ||
                      product.Product_description.toLocaleLowerCase().includes(
                        search
                      ) ||
                      product.Category.toLocaleLowerCase().includes(search);
              })
              .map((product) => (
                <div className="card">
                  <div className="dashboxicon">
                    <img
                      src="/img/Chocolate-Oreo-French-Toast.jpg"
                      alt="product-image"
                    />
                  </div>
                  <div>
                    <tr key={product._id}>
                      <div className="dashboxName">
                        Category Name : {product.Category}
                      </div>
                      <div className="dashboxName">
                        Product Name : {product.Product_name}
                      </div>
                      <div className="dashboxName">
                        Description : {product.Product_description}
                      </div>
                      <div className="dashboxName">
                        Price : {product.Product_price}
                      </div>
                      <div>
                        <Link
                          to={`/updateProduct/${product._id}`}
                          className="btn btn-primary "
                          onClick={() => setData(product)}
                        >
                          Update
                        </Link>{" "}
                        <Link
                          to={`/deleteProduct/${product._id}`}
                          className="btn btn-danger "
                          onClick={() => setData(product)}
                        >
                          Delete
                        </Link>
                      </div>
                    </tr>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Viewproduct;
