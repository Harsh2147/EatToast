import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { FETCH_ALL_CATEGORIES } from "../../graphql/FetchCatQuery";
import { Link } from "react-router-dom";

function Viewcategory() {
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
  const { loading, error, data } = useQuery(FETCH_ALL_CATEGORIES);
  const [search, setSearch] = useState("");
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
          <div className="details">
            <div className="latestOrder">
              <div className="cardHeader">
                <h2>All Categories</h2>
              </div>

              <table>
                <thead>
                  <tr>
                    <td>Category Name</td>
                    <td>Update</td>
                    <td>Delete</td>
                  </tr>
                </thead>

                <tbody>
                  {data?.getAllCategory_db
                    .filter((cat) => {
                      return search.toLocaleLowerCase() === ""
                        ? cat
                        : cat.category_name
                            .toLocaleLowerCase()
                            .includes(search);
                    })
                    .map((cat) => (
                      <tr key={cat._id}>
                        <td> {cat.category_name}</td>
                        <td>
                          <Link
                            to={`/updateCat/${cat._id}`}
                            className="btn btn-primary "
                            onClick={() => setData(cat)}
                          >
                            Update
                          </Link>
                        </td>
                        <td>
                          <Link
                            to={`/deleteCat/${cat._id}`}
                            className="btn btn-danger "
                            onClick={() => setData(cat)}
                          >
                            Delete
                          </Link>
                        </td>
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

export default Viewcategory;
