
// CVScreen.js
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Image, Linking } from 'react-native';

const CVScreen = ({ route }) => {
  const [name, setName] = useState('Mahnoor Aftab');
  const [workExperience, setWorkExperience] = useState(
    '- Software Engineer at ABC Tech (2022-Present)\n- UI/UX Designer at XYZ Solutions (2020-2022)'
  );
  const [education, setEducation] = useState(
    '- Bachelor of Science in Software Engineering\n- University: Comsats, Attock\n- Graduation Year: 2024'
  );
  const [skill, setSkill] = useState('JavaScript, React Native, UI/UX Design');

  useEffect(() => {
    
    if (route.params?.updatedName || route.params?.updatedWorkExperience || route.params?.updatedEducation || route.params?.updatedSkill) {
      setName(route.params.updatedName || name);
      setWorkExperience(route.params.updatedWorkExperience || workExperience);
      setEducation(route.params.updatedEducation || education);
      setSkill(route.params.updatedSkill || skill);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/pfp.avif')} style={styles.profileImage} />
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.skills}>Skills: {skill}</Text>
      </View>
      <View style={styles.line}></View>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>About Me</Text>
          <Text style={styles.infoText}>
            A passionate software engineer with expertise in mobile app development using React Native. I'm dedicated to creating elegant and efficient solutions for complex problems.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Education</Text>
          <Text style={styles.infoText}>{education}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Work Experience</Text>
          <Text style={styles.infoText}>{workExperience}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  skills: {
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 20,
  },
  section: {
    padding: 20,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CVScreen;
