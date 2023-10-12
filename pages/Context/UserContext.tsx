import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie

// Define the shape of your user data
export interface User {
    id: string | null;
    email: string | null;
    location: string | null;
    phoneNumber: string | null;
    latitude: number | undefined;
    longitude: number | undefined;
    avatar: string | null;
}

// Create a context for user data and token
export interface UserContextType {
    user: User | null;
    token: string | null;
    setUserAndToken: (user: User, token: string) => void;
    clearUserAndToken: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a custom hook to use the UserContext
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

// Create a UserProvider component to wrap your application
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [token, setToken] = React.useState<string | null>(null);

  // When the component initializes, try to load user and token from cookies
  useEffect(() => {
    const storedUser = Cookies.get('user');
    const storedToken = Cookies.get('token');

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const setUserAndToken = (newUser: User, newToken: string) => {
    // Set user and token in state
    setUser(newUser);
    setToken(newToken);

    // Save user and token in cookies
    Cookies.set('user', JSON.stringify(newUser), { expires: 30 });
    Cookies.set('token', newToken, { expires: 30 });
  };

  const clearUserAndToken = () => {
    // Clear user and token from state
    setUser(null);
    setToken(null);

    // Remove user and token from cookies
    Cookies.remove('user');
    Cookies.remove('token');
  };

  return (
    <UserContext.Provider value={{ user, token, setUserAndToken, clearUserAndToken }}>
      {children}
    </UserContext.Provider>
  );
};