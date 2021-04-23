import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TopResturants from './../screens/TopResturants';

const Stack = createStackNavigator()

export default function TopRestaurantsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="top-restaurants"
                component={TopResturants}
                options={{ title: "Los Mejores Restorantes"}}
            />
        </Stack.Navigator>
    )
}
