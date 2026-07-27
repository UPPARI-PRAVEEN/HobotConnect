
// Step 1 Create a Context usring createContext() method and export it to use in other components.
import {createContext} from 'react'

const UserContext = createContext(null)

export default UserContext

// Step 2
// import the created context in the component where you want to use it and wrap the component with the context provider.
// eg:
{/* <UserContext.Provider value={{ user: 'John Doe', isLoggedIn: true }}>
    // <AnyComponent /> to access the context values Globally

</UserContext.Provider> */}

// step 3 Use the useContext() hook to access the context values in any component that is wrapped with the context provider.
// Example:
// import { useContext } from 'react';
// import UserContext from './UserContext'; 

const userData = useContext(UserContext);
console.log(userData.user); // Output: John Doe
