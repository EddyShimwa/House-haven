import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { ProgressBarAndroid } from '@react-native-community/progress-bar-android';
import backgroundImage from '../assets/images-icons/houseBG.jpeg';

const SplashScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  const navigateToApp = () => {
    navigation.replace('App'); // Navigate to the main app screen
  };

  useEffect(() => {
    // Simulate a loading delay, you can replace this with your actual loading logic
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 10000); // 10000 milliseconds (10 seconds)

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const title = 'Find Your Dream Home ';
  const title2 = 'EASILY';

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        {isLoading ? (
          <>
            <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} color="#fff" />
            <Text style={styles.title}>{title.toLocaleUpperCase()}{title2}</Text>
            <Text style={styles.subtitle}>
              Now you can find your dream house easily and quickly at a low price
            </Text>
          </>
        ) : (
          <>
            <Text style={styles.title}>{title.toLocaleUpperCase()}{title2}</Text>
            <Text style={styles.subtitle}>
              Now you can find your dream house easily and quickly at a low price
            </Text>
            <TouchableOpacity style={styles.button} onPress={navigateToApp}>
              <FeatherIcon name="play" size={24} color="#000" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 20,
  },
  title: {
    fontSize: 42,
    fontWeight: '900',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    width: '80%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 20,
    marginTop: 200,
  },
});

export default SplashScreen;
