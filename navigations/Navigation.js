import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RestaurantsStack from './RestaurantsStack';
import FavoritesStack from './FavoritesStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AcccountStack';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{ title: "Restorantes"}}
                />
                <Tab.Screen
                    name="favorites"
                    component={FavoritesStack}
                    options={{ title: "Favotitos"}}
                />
                <Tab.Screen
                    name="top-resturants"
                    component={TopRestaurantsStack}
                    options={{ title: "Top 5"}}
                />
                <Tab.Screen
                    name="aearch"
                    component={SearchStack}
                    options={{ title: "Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
