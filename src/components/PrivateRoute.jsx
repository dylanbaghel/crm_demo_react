import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const isAuthenticated = useSelector((state) => !!state.auth.user)
    const navigate = useNavigate()

    useEffect(
        function () {
            if (!isAuthenticated) navigate('/')
        },
        [isAuthenticated]
    )

    return children
}

export default PrivateRoute
