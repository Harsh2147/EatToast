import React, { useEffect, useState } from "react";

function Vieworders() {
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
                    <td>Name</td>
                    <td>Price</td>
                    <td>Date</td>
                    <td>Time</td>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>

                  <tr>
                    <td>Customer Name</td>
                    <td>$1200</td>
                    <td>12 jan 2023</td>
                    <td>12:09 PM</td>
                  </tr>
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
