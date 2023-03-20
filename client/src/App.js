import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminViews from './components/AdminViews'
import EmployeeViews from './components/EmployeeViews'
import Login from "./components/Login";
import ViewsSelector from './components/ViewsSelector';
import Footer from "./components/Footer";

const UserRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)
  return <>{isAuth ? <Outlet /> : <Navigate to='/' />}</>
}

const AdminRoutes = () => {
  const { isAuth, isAdmin } = useSelector((state) => state.auth)
  return <>{isAuth && isAdmin ? <Outlet /> : <Navigate to='/user' />}</>
}

const InitialRoutes = () => {
  const { isAuth, isAdmin } = useSelector((state) => state.auth)

  return <>{!isAuth ? <Outlet /> : (isAdmin ? <Navigate to='/admin/select' /> : <Navigate to='/user' />)}</>
}



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<InitialRoutes />}>
            <Route path="/" element={<Login />} />
          </Route>
          <Route element={<UserRoutes />}>
            <Route path="/user/*" element={<EmployeeViews />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="/admin/select" element={<ViewsSelector />} />
            <Route path="/admin/*" element={<AdminViews />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
