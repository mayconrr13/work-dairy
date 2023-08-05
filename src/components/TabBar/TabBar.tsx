import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  AddButtonContainer,
  TabBarContainer,
  TabBarContent,
  TabBorder,
  TabButton,
  TabIcon,
  TabOption,
} from './styles';
import AddButton from '../AddButton';

const AUTH_ROUTES_ICONS: ('list' | 'bell' | 'user')[] = ['list', 'bell', 'user'];

const TabBar = (props: BottomTabBarProps) => {
  const {
    state: { routeNames, index: selectedTab },
    navigation: { navigate },
  } = props;

  const handleRouteRedirect = (route: string) => {
    navigate(route);
  };

  return (
    <TabBarContainer>
      <TabBarContent>
        {routeNames.map((route, tabIndex) => {
          return (
            <TabOption key={route}>
              <TabBorder isSelected={selectedTab === tabIndex} />
              <TabButton onPress={() => handleRouteRedirect(route)}>
                <TabIcon
                  name={AUTH_ROUTES_ICONS[tabIndex]}
                  size={24}
                  isSelected={selectedTab === tabIndex}
                />
              </TabButton>
            </TabOption>
          );
        })}

        <TabOption>
          <TabBorder isSelected={false} />
          <TabButton onPress={() => navigate('Login')}>
            <TabIcon name="log-out" size={24} isSelected={false} />
          </TabButton>
        </TabOption>

        <AddButtonContainer>
          <AddButton />
        </AddButtonContainer>
      </TabBarContent>
    </TabBarContainer>
  );
};

export default TabBar;
