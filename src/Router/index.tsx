import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Tutorial from '../screens/Tutorial';
import Translate from '../screens/Translate';

const Stack = createStackNavigator();

const Router: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tutorial" component={Tutorial} options={{headerShown: false}} />
                <Stack.Screen name="Translate" component={Translate} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;