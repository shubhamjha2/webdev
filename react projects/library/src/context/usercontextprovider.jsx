import React, { createContext, useState } from 'react';

const UserContext = createContext();

function UserContextProvider({children }) {
  const [user,setUserDat] = useState(null);

  return (
    <UserContext.Provider value={{ user,setUserDat }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
