import React, { useState, useContext } from 'react';
import { View, TextInput } from 'react-native';
import { ThemesContext } from '../../Context/ThemesContext';

const Searchbar = ({ tasks, setFilteredTasks }) => {
  const { theme } = useContext(ThemesContext);

  const [searchInput, setSearchInput] = useState('');

  const filterResults = input => {
    setSearchInput(input);
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
        placeholderTextColor={theme.text02}
        selectionColor={theme.primary}
        value={searchInput}
        onChangeText={input => filterResults(input)}
      />
    </View>
  );
};

const styles = theme => {
  return {
    container: {
      paddingBottom: 15,
      paddingHorizontal: 30,
    },
    searchInput: {
      fontSize: 22,
      color: theme.text01,
      backgroundColor: theme.base02,
      borderRadius: 15,
      paddingVertical: 10,
      paddingHorizontal: 18,
    },
  };
};

export default Searchbar;
