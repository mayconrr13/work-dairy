import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import RecoveryPassword from '../screens/RecoveryPassword';

const Stack = createStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="RecoveryPassword">
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen
        name="RecoveryPassword"
        component={RecoveryPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
