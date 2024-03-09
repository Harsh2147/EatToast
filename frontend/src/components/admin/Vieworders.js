import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_All_ORDERS } from "../../graphql/FetchAllOrders";
function Vieworders() {
  const navigate = useNavigate();
  // Check if loginData exists in localStorage
  const loginData = localStorage.getItem("loginData");
  console.log("Login Data= " + loginData);
  useEffect(() => {
    // Define the logout function
    if (!loginData && loginData == null) {
      navigate("/Login");
      //alert(`Please Login First`);
    }
  }, []);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
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
  const { loading, error, data } = useQuery(FETCH_All_ORDERS);
  if (!data || !data.getAllOrder_db) {
    console.error("No data or empty data returned for categories.");
  }
  const setData = (cat) => {
    let { category_name, _id } = cat;
    console.log("ID" + _id);
    localStorage.setItem("id", _id);
    localStorage.setItem("category_name", category_name);
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
            {loginData && (
              <>
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
                      <a href="/Logout">Logout</a>
                    </span>
                  </a>
                </li>
              </>
            )}
            {!loginData && (
              <li>
                <a href="#">
                  <span class="icon">
                    <ion-icon name="exit-outline"></ion-icon>
                  </span>
                  <span class="title">
                    <a href="/Login">Login</a>
                  </span>
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="main">
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 mx-1">
                <div className="input-group mx-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <button className="btn btn-primary" type="button">
                    Search
                  </button>
                </div>
              </div>
              <div className="col-md-5 ">
                <div className="input-group mb-3">
                  <label className="input-group-text">Filter</label>
                  <select className="form-select">
                    <option selected>Choose...</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="latestOrder">
              <div className="cardHeader">
                <h2>Recent Orders</h2>
              </div>

              <table>
                <thead>
                  <tr>
                    <td>Customer Name</td>
                    <td>Product</td>
                    <td>Quantity</td>
                    <td>Total Price With Tax</td>
                    <td>Pickup Date</td>
                    <td>Pickup Time</td>
                    <td>Order Date</td>
                  </tr>
                </thead>

                <tbody>
                  {data?.getAllOrder_db.map((order) => (
                    <tr key={order._id}>
                      <td>
                        {" "}
                        {order.CustomerFirstname}
                        {order.CustomerLastname}
                      </td>
                      <td>{order.Product_name}</td>
                      <td>{order.Quantity}</td>
                      <td>{order.TotalPriceWithTax}</td>
                      <td>{formatDate(order.Date)}</td>
                      <td>{order.Time}</td>
                      <td>{formatDate(order.CurrentDate)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vieworders;
