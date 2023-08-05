import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import RecoveryPassword from '../screens/RecoveryPassword';
import SignUp from '../screens/SignUp';
import { TabRoutes } from './tab.routes';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="AuthSection">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen name="AuthSection" component={TabRoutes} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
