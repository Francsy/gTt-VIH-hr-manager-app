import React, { useState, useEffect } from "react";
import AdminHeader from "./AdminHeader";
import AdminMain from "./AdminMain";

import { checkAdminContext } from '../../context/checkAdminContext'

import { useDispatch } from "react-redux";
import { unauthenticateAdmin } from '../../redux/slices/authSlice'
import axios from "axios";

const Admin = () => {

  const dispatch = useDispatch()
  const [adminName, setAdminName] = useState('')

  const logout = async () => {
    try {

      await axios.get('/api/logout')
      dispatch(unauthenticateAdmin())
      localStorage.removeItem('isAuth')
      localStorage.removeItem('isAdmin')

    } catch (e) {
      console.log(e)
    }
  }

  const checkAdminAuth = async () => {
    try {
      const res = await axios.get('api/admin/check')
      const message = res.data.message
      if (message === 'invalidAccess') {
        logout()
      } else if (message === 'isAuth') {
        setAdminName(res.data.nombre)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkAdminAuth()
    // eslint-disable-next-line
  }, [])



  const data = {
    adminName
  }

  return <>
    <checkAdminContext.Provider value={data} >
      <AdminHeader />
      <AdminMain />
    </checkAdminContext.Provider >
  </>;
};

export default Admin;
