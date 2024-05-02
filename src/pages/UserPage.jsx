import { useState } from "react";
import { Navigate } from "react-router-dom";

function UserPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h3>Kilikolo</h3>
        <p>Web developer</p>
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      </div>
    );
  }
}

export default UserPage;
