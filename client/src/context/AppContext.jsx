import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

// Create Provider
export const AppProvider = ({ children }) => {
  const [likedNotesCount, setLikedNotesCount] = useState(0);
  const [notes, setNotes] = useState([]);

  return (
    <AppContext.Provider
      value={{
        likedNotesCount,
        setLikedNotesCount,
        notes,
        setNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// ✅ Custom Hook
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
