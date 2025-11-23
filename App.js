import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { initDatabase } from './banco/Database';

// Telas existentes
import HomeScreen from './src/Home';
import ImcScreen from './src/Imc';
import ListaTarefasScreen from './src/ListaTarefas';
import ConvTempScreen from './src/ConvTemp';
import LoginScreen from './src/Login';
import RegisterScreen from './src/Register';
import FrasesScreen from './src/Frases';
import SobreScreen from './src/Sobre';

const Stack = createNativeStackNavigator();

function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    initDatabase()
      .then(() => {
        setDbInitialized(true);
      })
      .catch(err => {
        console.error("Erro ao inicializar o DB:", err);
      });
  }, []);

  if (!dbInitialized) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Criar Conta' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Menu Principal' }} />
        <Stack.Screen name="Imc" component={ImcScreen} options={{ title: 'Calculadora IMC' }} />
        <Stack.Screen name="ListaTarefas" component={ListaTarefasScreen} options={{ title: 'Lista de Tarefas' }} />
        <Stack.Screen name="ConvTemp" component={ConvTempScreen} options={{ title: 'Conversor de Temperatura' }} />
        <Stack.Screen name="Frases" component={FrasesScreen} options={{ title: 'Frases Motivacionais' }} />
        <Stack.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre o Aplicativo' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
