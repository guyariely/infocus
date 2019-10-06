import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TaskList from '../Screens/TaskListScreen/TaskListScreen';
import Form from '../Screens/FormScreen/FormScreen';

const StackNavigator = createStackNavigator(
  {
    Form,
    TaskList,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(StackNavigator);
