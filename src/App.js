// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Signup from './Components/Sign_Up/Sign_Up'; // Imported Signup component
import Login from './Components/Login/Login';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <>
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />

        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Landing_Page />} />

          {/* Signup route */}
          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Export the App component as the default export
export default App;
