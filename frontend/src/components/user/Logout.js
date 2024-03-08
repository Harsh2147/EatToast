import React, { useEffect } from "react";

function Logout() {
  useEffect(() => {
    // Remove CustomerloginData from localStorage
    localStorage.removeItem("CustomerloginData");
    // Redirect to the homepage or any other page after logout
    window.location.href = "/index";
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;
