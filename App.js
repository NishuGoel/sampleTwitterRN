import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Container, Header, Body,Title,Content,Input,Item,Button } from 'native-base';
// import App from './App';
import * as Font  from "expo-font";
import {Ionicons} from '@expo/vector-icons';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import {Post} from './Post';

const AppNavigator = createStackNavigator({
  // Home:{
  //   screen: App
  // },
  Post: Post
// },
//   {
//     initialRouteName: 'Home'
//   }
})
const AppContainer = createAppContainer(AppNavigator);

export class App extends Component  {

// handleSubmit(){
//   this.props.navigation.navigate("Post");
// }
 state = {
   loading: true
 }
 async componentDidMount() {
   await Font.loadAsync({
     'Roboto': require('./node_modules/native-base/Fonts/Roboto.ttf'),
     'Roboto_medium': require('./node_modules/native-base/Fonts/Roboto_medium.ttf'),
     ...Ionicons.font,
   })
   this.setState({ loading: false })
 }
 render(){
   if (this.state.loading) {
     return (
      <AppContainer />
     );
   }
   return (
     <Container style={styles.content}>
     <Header>
       <Body>
         <Title style={styles.watchFaceContainer}>UI Garage Twitter</Title>
       </Body>
     </Header>
     <Content>
        {/* <View ><Text>Username:</Text></View>
         <Item rounded>
         <Input placeholder='Username' />
       </Item> */}
       <View style={styles.username}>
         <Text style={styles.space}>Username:</Text>
           <Item rounded>
           <Input placeholder='Username'/>
         </Item>
         </View>
       <View ><Text style={styles.space}>Password:</Text></View>
         <Item rounded>
         <Input secureTextEntry={true} placeholder='Password'/>
       </Item>
       <Button style={styles.space} primary onPress= {() => this.props.navigation.navigate('Post')}><Text style={styles.button}> Submit </Text>
       </Button>
     </Content>
   </Container>
   );
 }
}
const styles = StyleSheet.create({
 watchFaceContainer:{
 color:"yellow",
 marginLeft:100,
 },
 content:{
  marginTop:30,
  marginRight:30,
  marginLeft: 30
 },
 username:{
   display:"flex",
 },
 space:{
  marginTop: 20
 },
 button:{
  color:"yellow",
   marginLeft:150,
 }
})

