import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PublicRoute({ children }) {
    const isAuthenticated = useSelector((state) => !!state.auth.user)
    const navigate = useNavigate()

    useEffect(
        function () {
            if (isAuthenticated) navigate('/dashboard')
        },
        [isAuthenticated]
    )

    return children
}

export default PublicRoute
