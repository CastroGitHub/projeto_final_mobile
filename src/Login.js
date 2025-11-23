import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { loginUser } from '../banco/Database'; // Certifique-se que o caminho esteja correto


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha o e-mail e a senha.');
      return;
    }

    try {
      const user = await loginUser(email, password);

      if (user) {
        Alert.alert('Sucesso', `Bem-vindo, ${user.email}!`);
        // Redireciona para a tela principal (Home)
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }], // Redireciona para o Menu Principal
        });
      } else {
        Alert.alert('Erro', 'E-mail ou senha inválidos.');
      }
    } catch (e) {
      console.error('Erro de login:', e);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu E-mail"
        placeholderTextColor="#999" // Adicionado para melhor visualização no fundo escuro
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        placeholderTextColor="#999" // Adicionado para melhor visualização no fundo escuro
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </Pressable>

      <Pressable style={styles.link} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Não tem conta? Cadastre-se.</Text>
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
    backgroundColor: '#9F00FF', // Lavanda super claro
  },
  title: {
    fontSize: 36,
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#ffffffff', // Roxo escuro
    letterSpacing: 1,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 2,
    borderColor: '#2a003d86', // Roxo neon
    borderRadius: 14,
    paddingHorizontal: 16,
    marginBottom: 18,
    backgroundColor: '#ffffffdc', // Lavanda médio
    color: '#2A003D', // Texto roxo profundo
    fontSize: 16,
  },
  button: {
    width: '45%',
    height: 52,
    borderRadius: 14,
    backgroundColor: '#ffffffff', // Roxo neon
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    elevation: 6,
    shadowColor: '#000000ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.45,
    shadowRadius: 7,
    borderColor: '#cacacaff',
    borderWidth: 1.5,
  },
  buttonText: {
    color: '#9F00FF',
    fontWeight: '500',
    fontSize: 18,
    letterSpacing: 1,
  },
  link: {
    marginTop: 18,
  },
  linkText: {
    color: '#ffffffff', // Roxo neon
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});



