import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation, tasks, setFilteredTasks }) => {
  const { theme } = useContext(ThemesContext);

  const [searchInput, setSearchInput] = useState('');

  const filterResults = input => {
    if (!input) setFilteredTasks(null);

    const filteredTasks = tasks.filter(
      task =>
        task.title.toLowerCase().includes(input.toLowerCase()) ||
        task.description.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredTasks(filteredTasks);
  };

  return (
    <View style={styles(theme).container}>
      <TextInput
        style={styles(theme).searchInput}
        placeholder="Search"
        placeholderTextColor={theme.primary}
        selectionColor={theme.primary}
        value={searchInput}
        onChangeText={input => {
          filterResults(input);
          setSearchInput(input);
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.push('FormScreen')}
        style={styles(theme).addButton}
      >
        <Icon color={theme.primary} name="add" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingVertical: 15,
      paddingHorizontal: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    searchInput: {
      fontSize: 22,
      color: theme.text01,
      flex: 6,
    },
    addButton: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  };
};

export default withNavigation(Header);
