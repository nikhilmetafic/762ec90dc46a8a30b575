import * as types from './actionTypes'

const initialState = {
    loading: false,
    isInternetConnected: true,
    bedDetail: {},
    entityResponse: [],
    wingList: [],
    bedList: [],
    errorMessage: '',
    isError: false,
    isopenDrawer: false
};

const global = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case types.API_LOADING_START:
            return {...state, loading: true};
        case types.TOGGLE_DRAWER:
            return {...state, isopenDrawer: action.payload};
        case types.API_LOADING_STOP:
            return {...state, loading: false};
        case types.API_WING_LIST:
            return {...state, loading: false, wingList: action.payload};
        case types.ON_ERROR_RECEIVED:
            return {...state, loading: false, errorMessage: action.payload.message, isError: action.payload.type};

        case types.API_SUCCESS_BED_REQ:

            return {...state, loading: false, bedDetail: action.payload};

        case types.API_SUCCESS_DESH_REQ:

            return {...state, loading: false, entityResponse: action.payload};
        case types.IS_INTERNET_CONNECTED:
            console.warn(action.payload)
            if (action.payload === false) {
                return {...state, isInternetConnected: action.payload, loading: false};
            } else {
                return {...state, isInternetConnected: action.payload};
            }
        default:
            return state
    }
};

export default global
