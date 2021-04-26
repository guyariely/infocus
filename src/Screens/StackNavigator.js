import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TaskListScreen from '../Screens/TaskListScreen/TaskListScreen';
import FormScreen from '../Screens/FormScreen/FormScreen';
import TaskScreen from '../Screens/TaskScreen/TaskScreen';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';

const StackNavigator = createStackNavigator(
  {
    TaskListScreen: {
      screen: TaskListScreen,
    },
    FormScreen: {
      screen: FormScreen,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
    TaskScreen: {
      screen: TaskScreen,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
    StatsScreen: {
      screen: StatsScreen,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
