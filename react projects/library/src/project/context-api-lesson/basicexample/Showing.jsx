import React, { useContext } from "react";
import { UserContext } from "../../../context/usercontextprovider";

function Showing() {
  const { user } = useContext(UserContext);
  
  return (
    <div className="w-full max-w-md mx-auto mt-8 bg-gray-100 p-8 rounded-lg">
      {user ? (
        <h1 className="text-center text-2xl text-blue-600">
          Welcome {user.username}, your password is {user.password}
        </h1>
      ) : (
        <h1 className="text-center text-2xl text-red-600">Insert data</h1>
      )}
    </div>
  );
}

export default Showing;
