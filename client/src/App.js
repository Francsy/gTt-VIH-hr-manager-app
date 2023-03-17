import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminViews from './components/AdminViews'
import EmployeeViews from './components/EmployeeViews'
import Login from "./components/Login";
import ViewsSelector from './components/ViewsSelector';
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user/*" element={<EmployeeViews />} />
          <Route path="/admin/select" element={<ViewsSelector />} />
          <Route path="/admin/*" element={<AdminViews />} />
        </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
