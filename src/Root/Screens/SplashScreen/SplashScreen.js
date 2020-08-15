import React, {Component} from 'react';
import {Container, Text, Input, Button, Content} from 'native-base';
import {connect} from 'react-redux';
import {FlatList, View, TouchableOpacity} from 'react-native';

const axios = require('axios');

class SplashScreen extends Component {
    BASE_URL = 'https://restcountries.eu/rest/v2/name/';

    constructor(props) {
        super(props);
        this.state = {
            country: '',
            countryList: [],
        };
    }

    onSubmit = () => {
        axios.get(this.BASE_URL+this.state.country)
            .then(res => {

                this.setState({countryList: res.data});
            })
            .catch(err => {
                alert(err);
            });

    };

    render() {

        const renderItem = ({item}) => (
            <TouchableOpacity
                style={{padding: 10}}
                onPress={()=>{
                    const param={
                        name:item.name,
                        capital:item.capital,
                        population:item.population,
                        latlng:item.latlng,
                        flag:item.flag
                    }
                    this.props.navigation.navigate('LoginScreen',{data: param});
                }}
            >
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
        return (

            <Container>
                <Content>
                    <Text>Welcome</Text>
                    <Input placeholder={'Enter country'}
                           value={this.state.country}
                           onChangeText={(text) => {
                               this.setState({
                                   country: text,
                               });
                           }}>

                    </Input>
                    <Button full disabled={this.state.country != '' ? false : true}
                            onPress={this.onSubmit}>
                        <Text>{'submit'}</Text>
                    </Button>
                    <FlatList
                        data={this.state.countryList}
                        renderItem={renderItem}
                        keyExtractor={item => item.name}
                    />
                </Content>
            </Container>
        );
    }
}


export default SplashScreen;
