// RegistrationForm.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RegistrationForm({ navigation }) {
  const [name, setName] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [education, setEducation] = useState('');
  const [skill, setSkill] = useState('');

  useEffect(() => {
    retrieveDetails();
  }, []);

  const retrieveDetails = async () => {
    try {
      const storedName = await AsyncStorage.getItem('name');
      const storedWorkExperience = await AsyncStorage.getItem('workExperience');
      const storedEducation = await AsyncStorage.getItem('education');
      const storedSkill = await AsyncStorage.getItem('skill');

      setName(storedName || '');
      setWorkExperience(storedWorkExperience || '');
      setEducation(storedEducation || '');
      setSkill(storedSkill || '');
    } catch (error) {
      console.error('Error retrieving details:', error);
    }
  };

  const saveDetails = async (entryType) => {
    try {
     
      await AsyncStorage.setItem(
        entryType,
        entryType === 'skill' ? skill : entryType === 'name' ? name : entryType === 'workExperience' ? workExperience : education
      );

   
      const storedName = await AsyncStorage.getItem('name');
      const storedWorkExperience = await AsyncStorage.getItem('workExperience');
      const storedEducation = await AsyncStorage.getItem('education');
      const storedSkill = await AsyncStorage.getItem('skill');

      
      navigation.navigate('CVScreen', {
        updatedName: storedName,
        updatedWorkExperience: storedWorkExperience,
        updatedEducation: storedEducation,
        updatedSkill: storedSkill,
        updatesMade: true,
      });
    } catch (error) {
      console.error('Error saving details:', error);
    }
  };

  const removeDetails = async (entryType) => {
    try {
      
      await AsyncStorage.removeItem(entryType);

      
      const storedName = await AsyncStorage.getItem('name');
      const storedWorkExperience = await AsyncStorage.getItem('workExperience');
      const storedEducation = await AsyncStorage.getItem('education');
      const storedSkill = await AsyncStorage.getItem('skill');

      
      navigation.navigate('CVScreen', {
        updatedName: storedName,
        updatedWorkExperience: storedWorkExperience,
        updatedEducation: storedEducation,
        updatedSkill: storedSkill,
        updatesMade: true,
      });
    } catch (error) {
      console.error('Error removing entry:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration Form</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => saveDetails('name')}>
          <Text style={styles.buttonText}>Add Name</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeDetails('name')}>
          <Text style={styles.buttonText}>Remove Name</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Work Experience"
          value={workExperience}
          onChangeText={(text) => setWorkExperience(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => saveDetails('workExperience')}>
          <Text style={styles.buttonText}>Add Work Experience</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeDetails('workExperience')}>
          <Text style={styles.buttonText}>Remove Work Experience</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Education"
          value={education}
          onChangeText={(text) => setEducation(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => saveDetails('education')}>
          <Text style={styles.buttonText}>Add Education</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeDetails('education')}>
          <Text style={styles.buttonText}>Remove Education</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Skill"
          value={skill}
          onChangeText={(text) => setSkill(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => saveDetails('skill')}>
          <Text style={styles.buttonText}>Add Skill</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => removeDetails('skill')}>
          <Text style={styles.buttonText}>Remove Skill</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'green',
  },
  addButton: {
    backgroundColor: 'orange',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 5,
  },
  removeButton: {
    backgroundColor: 'red',
    width: 300,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default RegistrationForm;





