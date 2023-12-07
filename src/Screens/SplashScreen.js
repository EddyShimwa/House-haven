import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import backgroundImage from '../assets/images-icons/houseBG.jpeg';

const SplashScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      navigation.replace('App');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const title = 'Find Your Dream Home ';
  const title2 = 'EASILY';

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {title.toLocaleUpperCase()}
          <Text style={styles.greenText}>{title2}</Text>
        </Text>
        <Text style={styles.subtitle}>
          Now you can find your dream house easily and quickly at a low price
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#00ff00" /> // Green color for the spinner
        ) : (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Powered By TechLab</Text>
          </View>
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
  greenText: {
    color: '#00ff00', // Green color
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    width: '80%',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
  },
  footerText: {
    color: '#fff',
  },
});

export default SplashScreen;
