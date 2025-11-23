import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.containerDark}>
      <Text style={styles.titleDark}>Escolha uma Atividade:</Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('Imc')}>
        <Text style={styles.buttonText}>1. Calculadora de IMC</Text>
      </Pressable>

      <View style={styles.separator} />

      <Pressable style={styles.button} onPress={() => navigation.navigate('ListaTarefas')}>
        <Text style={styles.buttonText}>2. Lista de Tarefas</Text>
      </Pressable>

      <View style={styles.separator} />

      <Pressable style={styles.button} onPress={() => navigation.navigate('ConvTemp')}>
        <Text style={styles.buttonText}>3. Conversor de Temperatura</Text>
      </Pressable>

      <View style={styles.separator} />
      
      <Pressable style={styles.button} onPress={() => navigation.navigate('Frases')}>
        <Text style={styles.buttonText}>4. Frases Motivacionais</Text>
      </Pressable>

      <View style={styles.separator} />

      <Pressable style={styles.button} onPress={() => navigation.navigate('Sobre')}>
        <Text style={styles.buttonText}>5. Sobre o Aplicativo</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: '#EDE9F6',
  },
  titleDark: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#4B008A',
    letterSpacing: 1,
  },
  separator: {
    marginVertical: 22,
    backgroundColor: '#B066FF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDE9F6',
  },
  title: {
    fontSize: 32,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#4B008A',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#B066FF',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F4E9FF',
    color: '#3A005F',
  },
  button: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#8A2BFF',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 6,
    shadowColor: '#8A2BFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
    marginLeft: '10%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#8A2BFF',
  },
});
