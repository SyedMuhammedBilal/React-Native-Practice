import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'   
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import About from '../screens/About'

const screens = {
    Home: {
        screen: Home,
        // Navigation Options
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                // backgroundColor: 'grey'
            }
        }
    },
    ReviewDetails: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    }
}

const DefaultStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        }
    }
});

export default createAppContainer(DefaultStack);