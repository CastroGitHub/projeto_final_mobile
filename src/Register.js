import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { registerUser } from '../banco/Database'; // Certifique-se que o caminho esteja correto

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o e-mail e a senha.');
      return;
    }

    try {
      await registerUser(email, password);
      Alert.alert('Sucesso', 'Usuário registrado! Faça login agora.');
      navigation.navigate('Login');
    } catch (e) {
      // O código de erro 2068 geralmente significa UNIQUE constraint failed (email já existe)
      if (e.code === 2068) {
         Alert.alert('Erro', 'Este e-mail já está em uso.');
      } else {
         console.error('Erro de registro:', e);
         Alert.alert('Erro', 'Ocorreu um erro ao registrar.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999" // Adicionado para melhor visualização no fundo escuro
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999" // Adicionado para melhor visualização no fundo escuro
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>REGISTRAR</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Já tem conta? Faça login.</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#9b23d3ff', // Cinza lilás suave metálico (novo fundo)
  },
  title: {
    fontSize: 36,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#ffffffff', // Roxo profundo elegante
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 2,
    borderColor: '#B066FF', // Roxo pastel metálico
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 18,
    backgroundColor: '#F4E9FF', // Roxo pálido sofisticado
    color: '#3A005F', // Texto roxo escuro
    fontSize: 16,
  },
  button: {
    width: '40%',
    height: 52,
    borderRadius: 14,
    backgroundColor: '#ffffffff', // Roxo metálico intenso
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    elevation: 6,
    shadowColor: '#000000ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 7,
  },
  buttonText: {
    color: '#9b23d3ff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 1,
  },
  link: {
    marginTop: 18,
  },
  linkText: {
    color: '#ffffffff', // Roxo metálico
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

