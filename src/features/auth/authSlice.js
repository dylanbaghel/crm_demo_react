const initialState = {
    user: null,
    status: 'idle',
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'auth/loading':
            return { ...state, status: 'loading' }
        case 'auth/loaded':
            return { ...state, status: 'idle', user: action.payload }
        case 'auth/failed':
            return { ...state, status: 'failed', user: null }
        case 'auth/clear':
            return { ...state, status: 'idle', user: null }
        default:
            return state
    }
}

export function authLoading() {
    return { type: 'auth/loading' }
}
export function authLoaded(user) {
    return { type: 'auth/loaded', payload: user }
}
export function authFailed() {
    return { type: 'auth/failed' }
}

export function authClear() {
    return { type: 'auth/clear' }
}
