import { BASE_URL } from '../../utils/constants'
import { toast } from 'react-toastify'

import { authLoading, authLoaded, authFailed } from './authSlice'

const url = `${BASE_URL}/user-management/login`

const login = (email, password) => {
    return async (dispatch, getState) => {
        try {
            dispatch(authLoading())
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })
            const response = await res.json()
            if (!response.success) toast(response.errorMessage)
            localStorage.setItem('token', response.token)
            dispatch(authLoaded(response.data))
        } catch (err) {
            toast(err.message || 'Unexpected Error')
            dispatch(authFailed())
        }
    }
}

export { login }
