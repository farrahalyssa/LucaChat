import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homescreen from '../homescreen';
import SignUp from '../signup';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName="SignUp"
       screenOptions={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTransparent: true,
        }}>
        <Stack.Screen name="homescreen" component={homescreen} />
        <Stack.Screen
        name="SignUp"
        component={SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

