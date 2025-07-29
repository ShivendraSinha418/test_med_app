// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Signup from './Components/Sign_Up/Sign_Up'; // Imported Signup component
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';
// Function component for the main App
function App() {

  // Render the main App component
  return (
    <>
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Notification>
        <Navbar />

        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Landing_Page />} />

          {/* Signup route */}
          <Route path="/signup" element={<Signup />} />

          <Route path="/login" element={<Login />} />

          <Route path="/instant-consultation" element={<InstantConsultation />} />

          <Route path="/finddoctor" element={<FindDoctorSearch />} />

          <Route path='/search/doctors' element={<BookingConsultation />} />

        </Routes>

        </Notification>
      </BrowserRouter>
    </>
  );
}

// Export the App component as the default export
export default App;
