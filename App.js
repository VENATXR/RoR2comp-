import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Home from './components/Home';
import Items from './components/Items';
import Builds from './components/Builds';
import Characters from './components/Characters';
import Enemies from './components/Enemies';
import Locations from './components/Locations';
import Tips from './components/Tips';
import About from './components/About';

// Импорт иконок
import homeIcon from './assets/icons/home.png';
import itemsIcon from './assets/icons/items.png';
import buildsIcon from './assets/icons/builds.png';
import charactersIcon from './assets/icons/characters.png';
import enemiesIcon from './assets/icons/enemies.png';
import locationsIcon from './assets/icons/locations.png';
import tipsIcon from './assets/icons/tips.png';
import aboutIcon from './assets/icons/about.png';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            switch (route.name) {
              case 'Домой':
                iconSource = homeIcon;
                break;
              case 'Предметы':
                iconSource = itemsIcon;
                break;
              case 'Сборки':
                iconSource = buildsIcon;
                break;
              case 'Персонажи':
                iconSource = charactersIcon;
                break;
              case 'Враги':
                iconSource = enemiesIcon;
                break;
              case 'Локации':
                iconSource = locationsIcon;
                break;
              case 'Советы':
                iconSource = tipsIcon;
                break;
              case 'О нас':
                iconSource = aboutIcon;
                break;
              default:
                iconSource = homeIcon;
            }

            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: '#1e1e1e',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Items" component={Items} />
        <Tab.Screen name="Builds" component={Builds} />
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Enemies" component={Enemies} />
        <Tab.Screen name="Locations" component={Locations} />
        <Tab.Screen name="Tips" component={Tips} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;