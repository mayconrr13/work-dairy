import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import RecoveryPassword from '../screens/RecoveryPassword';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="SignUp">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
