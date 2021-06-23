import React from 'react';
import { 
  View, 
  Text, 
  Image,  
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';

import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';


export function SignIn(){

  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return(
    <View style={styles.container}>
      
      <Image 
        source={IllustrationImg} 
        style={styles.image} 
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecta-te {'\n'}
          e organiza as tuas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Cria grupos para jogar os teus jogos {'\n'} 
          favoritos com seus amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          onPress={handleSignIn}
        />                
               
      </View>
    </View>
  );
}