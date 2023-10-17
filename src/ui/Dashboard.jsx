import { Link } from 'react-router-dom'

import { authClear } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

function Dashboard() {
    const dispatch = useDispatch()
    return (
        <div>
            Main Dashboard <Link to="/">Go Home</Link>
            <button
                onClick={() => {
                    localStorage.removeItem('token')
                    dispatch(authClear())
                }}
            >
                Logout
            </button>
        </div>
    )
}

export default Dashboard
