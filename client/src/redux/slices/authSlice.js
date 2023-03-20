import { createSlice } from '@reduxjs/toolkit'

const userAuthFromLocalStorage = () => {
    const isAuth = localStorage.getItem('isAuth')

    if (isAuth && JSON.parse(isAuth) === true) {
        return true
    }

    return false
}

const isAdminFromLocalStorage = () => {
    const isAdmin = localStorage.getItem('isAdmin')
    if (isAdmin && JSON.parse(isAdmin) === true) {
        return true
    }

    return false
}

const initialState = {
    isAuth: userAuthFromLocalStorage(),
    isAdmin: isAdminFromLocalStorage()
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticateUser: (state) => {
            state.isAuth = true
        },
        authenticateAdmin: (state) => {
            state.isAuth = true
            state.isAdmin = true
        },
        unauthenticateUser: (state) => {
            state.isAuth = false
        },
        unauthenticateAdmin: (state) => {
            state.isAuth = false
            state.isAdmin = false
        }

    },
})

export const { authenticateUser, authenticateAdmin, unauthenticateUser, unauthenticateAdmin } = authSlice.actions

export default authSlice.reducer
