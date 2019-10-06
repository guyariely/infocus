import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation, task, pauseTask }) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon color={theme.primary} name="close" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles(theme).statsButton}>
        <Icon color={theme.primary} name="timeline" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          pauseTask();
          navigation.push('FormScreen', { task, id: task.id });
        }}
      >
        <Icon color={theme.primary} name="create" size={24} />
      </TouchableOpacity>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingVertical: 15,
      flexDirection: 'row',
    },
    statsButton: {
      marginLeft: 'auto',
      marginRight: 18,
    },
  };
};

export default withNavigation(Header);
