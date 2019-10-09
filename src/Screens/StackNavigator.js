import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TaskListScreen from '../Screens/TaskListScreen/TaskListScreen';
import FormScreen from '../Screens/FormScreen/FormScreen';
import TaskScreen from '../Screens/TaskScreen/TaskScreen';
import StatsScreen from '../Screens/StatsScreen/StatsScreen';

const StackNavigator = createStackNavigator(
  {
    TaskListScreen: {
      screen: TaskListScreen,
    },
    FormScreen: {
      screen: FormScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    TaskScreen: {
      screen: TaskScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    StatsScreen: {
      screen: StatsScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
