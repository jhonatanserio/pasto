import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Feed({image}) {
    return (
     <Image source={image}style={styles.img}/>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      color:'white',
    },
    img:{
      height:400,
      width:300,
      padding:10,
      marginTop:10
    }
  
    
  });
  