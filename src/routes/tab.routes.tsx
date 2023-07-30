import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text } from 'react-native';
import { StackRoutes } from './stack.routes';
const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        component={() => (
          <SafeAreaView>
            <Text>Dashboard</Text>
          </SafeAreaView>
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Notification"
        component={() => (
          <SafeAreaView>
            <Text>Notificação</Text>
          </SafeAreaView>
        )}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Perfil"
        component={() => (
          <SafeAreaView>
            <Text>Profile</Text>
          </SafeAreaView>
        )}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
