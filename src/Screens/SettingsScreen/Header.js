import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation }) => {
  const { theme } = useContext(ThemesContext);

  return (
    <View style={styles(theme).container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon color={theme.primary} name="close" size={24} />
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
  };
};

export default withNavigation(Header);
