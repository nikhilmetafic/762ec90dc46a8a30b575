import * as types from './actionTypes'


export const apiLoadingStart = () => ({type: types.API_LOADING_START});
export const apiLoadingStop = () => ({type: types.API_LOADING_STOP});

export const noInternetConnected = (isConnected) => ({type: types.IS_INTERNET_CONNECTED, payload: isConnected});
export const toggleDrawer = (isOpen) => ({type: types.TOGGLE_DRAWER, payload: isOpen});
const defaultHeaders = {'type': 'application/json'};

export const login = (params,{SuccessCallback}) => {
    return (dispatch) => {
        dispatch(apiLoadingStart());
        dispatch(apiLoadingStop());
        SuccessCallback({});


    }
};

// export const login = (params
//
//     return
// );

const errorHendler = (type, message) => {
    return (dispatch) => {
        dispatch(onError({message: message, type: type}));
        setTimeout(() => {
            dispatch(onError(''));
        }, 3000)
    }
};

const apiBedReqSuccess = (data) => ({type: types.API_SUCCESS_BED_REQ, payload: data});
const apiDashboardReqSuccess = (data) => ({type: types.API_SUCCESS_DESH_REQ, payload: data});
const onError = (data) => ({type: types.ON_ERROR_RECEIVED, payload: data});
const apiWingList = (data) => ({type: types.API_WING_LIST, payload: data});
