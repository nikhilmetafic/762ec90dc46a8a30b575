import {Method} from "src/APIService";

export const MIXPANEL_TOKEN = {
    Development: 'xxx',
    Testing: 'xxx',
    Production: 'xxxx',
    Alpha: 'xxxxxx'
};
export const AppVersion = 'v0.4.1';

export const apiConfig = {
    productionBaseURL: "xx", /*release build*/
    testingBaseURL: "xxx",/*inteneal testing*/
    developmentBaseURL: "xxx",/*for client test*/
    alphaBaseURL: "x",
};


export const endPoints = {
    signin: {endpoint: "/signin", method: Method.POST},

};


//number of logins, app active time, number of users, feature heat map,
export const MixPanelKey = {
    EventAppOpen: 'Application is launched'
};
//number of logins, app active time, number of users, feature heat map,
export const SessionKey = {
    USER: 'user'
};
