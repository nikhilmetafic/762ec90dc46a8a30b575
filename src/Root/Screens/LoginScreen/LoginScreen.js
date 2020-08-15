import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Container, Content, Text} from 'native-base';
import {Image, View} from 'react-native';
import styles from './LoginScreenStyle';

const axios = require('axios');

class LoginScreen extends Component {
    BASE_URL = 'http://api.weatherstack.com/current?access_key=28be504b0a386b2ea14092643fa776fe&query=';

    constructor(props) {
        super(props);
        this.state = {
            countryDetails: {},
            weather: {},
        };
    }

    componentDidMount(): void {
        const {data} = this.props.route.params;
        this.setState({
            countryDetails: data,
        });
    }

    getCapitalWeather = () => {

        let url = encodeURI(this.BASE_URL + this.state.countryDetails.capital);
        axios.get(url)
            .then(res => {
                this.setState({weather: res.data});
                alert(JSON.stringify(res.data));
            })
            .catch(err => {
                alert(err);
            });

    };

    render() {
        const {countryDetails, weather} = this.state;
        const {latlng} = countryDetails;
        const {current} = weather;
        return (

            <Container>
                <Text style={styles.mytext}>Capital : {countryDetails?.capital}</Text>
                <Text style={styles.mytext}>Population :{countryDetails?.population}</Text>
                <Text style={styles.mytext}>latlng : {latlng}</Text>
                <Text style={styles.mytext}>flag : {countryDetails?.flag}</Text>
                <Image
                    style={{height: 25, width: 50}}
                    source={{uri: countryDetails?.flag}}></Image>

                <Button full
                        onPress={this.getCapitalWeather}>
                    <Text>{'Capital Weather.'}</Text>
                </Button>

                {current &&
                <View>
                    <Text style={styles.mytext}>Temperature : {current?.temperature}</Text>
                    <Text style={styles.mytext}>Wind Speed : {current?.wind_speed}</Text>
                    <Text style={styles.mytext}>Precip : {current?.precip}</Text>

                    <Image
                        style={{height: 150, width: 150}}
                        source={{uri: current?.weather_icons[0]}}></Image>
                </View>
                }
            </Container>
        );
    }
}


export default LoginScreen;
