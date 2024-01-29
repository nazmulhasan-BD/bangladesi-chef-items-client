import React, { createContext } from 'react';

export const UserContext = createContext(null)

const UserProvider = ({children}) => {
    const user = {
        name: "munna",
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;