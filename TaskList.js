import React from 'react';
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTaskContext } from './TaskContext';

const TaskList = () => {
  const { state, dispatch } = useTaskContext();

  const toggleTask = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const removeTask = id => {
    dispatch({ type: 'REMOVE_TASK', payload: id });
  };

  return (
    <View style={styles.container}>
          <FlatList
        data={state.tasks}
        keyExtractor={task => task.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTask(item.id)}>
                <Text style={[styles.taskText, { textDecorationLine: item.completed ? 'line-through' : 'none' }]}>
                {item.text}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
                <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
            </View>
            )}
            />
    </View>
  );
};

const styles = StyleSheet.create({

container:{
    flex:  1,
    alignItems:"center",
    justifyContent:"center"
},
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 18,
  },
  removeButton: {
    color: 'red',
  },
});

export default TaskList;
