import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
