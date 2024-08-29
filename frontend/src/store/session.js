import { csrfFetch } from "./csrf";

const SET_SESSION_USER = "session/SET_SESSION_USER";
const REMOVE_SESSION_USER = "session/REMOVE_SESSION_USER";

const setUser = (userData) => {
    return {
        type: SET_SESSION_USER,
        payload: userData,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_SESSION_USER,
    };
};

export const addSessionUser = (userData) => async (dispatch) => {
    const res = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify(userData),
    });

    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

export const getCurrentUser = () => async (dispatch) => {
    const res = await fetch("/api/session");
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

export const addUser = (userData) => async (dispatch) => {
    const res = await csrfFetch("api/users", {
        method: "POST",
        body: JSON.stringify(userData),
    });

    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION_USER:
            return {
                ...state,
                user: action.payload,
            };
        case REMOVE_SESSION_USER:
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default sessionReducer;
