import React, {Component} from 'react';
import {connect} from 'react-redux';
import {noInternetConnected, toggleDrawer} from 'src/store/global';
import NetInfo, {NetInfoSubscription} from '@react-native-community/netinfo';
import {Container} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Root/Screens/LoginScreen';

import SplashScreen from './Root/Screens/SplashScreen';

const Stack = createStackNavigator();




class Containers extends Component {
    // _subscription: NetInfoSubscription | null = null;
    _subscription = null;

    constructor(props) {
        super(props);
        this.state = {
            isConnected: true
        };
    }

    async componentDidMount() {


        this._subscription = NetInfo.addEventListener(state => {

            this.setState({
                isConnected: state.isConnected,
            });
            this.props.noInternetConnected(state.isConnected);

        });

    }


    componentWillUnmount() {

        this._subscription && this._subscription();
    }


    render() {
        return (


            <Container >


                <NavigationContainer>
                    <Stack.Navigator>

                        <Stack.Screen
                            options={{headerShown: false}}
                            name="SplashScreen"
                            component={SplashScreen}
                        />
                        <Stack.Screen
                            options={{headerShown: false}}
                            name="LoginScreen"
                            component={LoginScreen}
                        />




                    </Stack.Navigator>
                </NavigationContainer>




            </Container>


        );
    }
}

const mapActionCreators = {
    noInternetConnected,
    toggleDrawer,
};

const mapStateToProps = state => {
    return {
        isInternetConnected: state.global.isInternetConnected,
        globalLoding: state.global.loading
    };
};

export default connect(
    mapStateToProps,
    mapActionCreators,
)(Containers);
