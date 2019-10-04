import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import TaskList from '../Screens/TaskListScreen/TaskListScreen';

const StackNavigator = createStackNavigator({
  TaskList
}, {
    headerMode: 'none',
});

export default createAppContainer(StackNavigator);