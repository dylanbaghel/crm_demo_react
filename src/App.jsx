import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import jwt_decode from 'jwt-decode'

import LoginPage from './features/auth/LoginPage'
import AppLayout from './ui/AppLayout'
import Dashboard from './ui/Dashboard'
import Error from './ui/Error'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

import { authClear, authLoaded } from './features/auth/authSlice'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: (
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                ),
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
        ],
    },
])

export default function App() {
    const dispatch = useDispatch()
    useEffect(function () {
        if (localStorage.getItem('token')) {
            const token = localStorage.getItem('token')
            const decoded = jwt_decode(token)
            dispatch(authLoaded(decoded.user))
        } else {
            dispatch(authClear())
        }
    }, [])
    return <RouterProvider router={router}></RouterProvider>
}
