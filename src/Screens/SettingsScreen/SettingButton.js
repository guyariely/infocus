import React, { useContext } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingButton = ({ style, title, isActive, onPress }) => {
  const { theme } = useContext(ThemesContext);

  const removeBorder = !isActive && (title == 'Light' || title == 'Dark');

  return (
    <TouchableOpacity
      style={[
        styles(theme).container,
        style && style.container,
        removeBorder && styles(theme).removeBorder,
      ]}
      onPress={onPress}
    >
      <Text style={[styles(theme).title, style && style.title]}>{title}</Text>

      {isActive && <Icon color={theme.primary} name="check" size={24} />}
    </TouchableOpacity>
  );
};

const styles = theme => {
  return {
    container: {
      flexGrow: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderColor: theme.primary,
      borderWidth: 1,
      borderRadius: 5,
      padding: 15,
    },
    removeBorder: {
      borderWidth: 0,
    },
    title: {
      color: theme.text01,
      fontSize: 20,
      fontWeight: '600',
    },
  };
};

export default SettingButton;
