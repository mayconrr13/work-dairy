import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import Dairies from '../screens/Dairies';
const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator initialRouteName="Dairies" tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Dairies" component={Dairies} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
