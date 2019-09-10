import React, {Component} from 'react';
import { Text, View} from 'react-native';


export class Post extends Component{

static navigationOptions={
    header: null
};

    render(){
        return(
            <View>
                <Text>
                    New page!
                </Text>
            </View>
        )
    }
}