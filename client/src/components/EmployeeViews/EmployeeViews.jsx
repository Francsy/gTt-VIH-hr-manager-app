import React, { useEffect, useState } from "react";
import EmployeeHeader from './EmployeeHeader'
import EmployeeMain from "./EmployeeMain";
import { checkUserContext } from "../../context/checkUserContext";

import { useDispatch } from "react-redux";
import { unauthenticateAdmin } from '../../redux/slices/authSlice'
import axios from "axios";


const Employee = () => {


  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userHours, setUserHours] = useState(0)

  const logout = async () => {
    await axios.get('/api/logout')
    dispatch(unauthenticateAdmin())
    localStorage.removeItem('isAuth')
    localStorage.removeItem('isAdmin')
  }

  const checkUserAuth = async () => {
    try {
      const res = await axios.get('api/user/check')
      const message = res.data.message
      if (message === 'invalidAccess') {
        logout()
      } else if (message === 'isAuth') {
        setUserName(res.data.nombre)
        setUserHours(res.data.horasExtra)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkUserAuth()
    // eslint-disable-next-line
  }, [])

  const data = {
    userName,
    userHours
  }


  return <div>
    <checkUserContext.Provider value={data} >
      <EmployeeHeader />
      <EmployeeMain />
    </checkUserContext.Provider>

  </div>;
};

export default Employee;
