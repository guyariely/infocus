import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TaskListScreen from '../Screens/TaskListScreen/TaskListScreen';
import FormScreen from '../Screens/FormScreen/FormScreen';

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
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
