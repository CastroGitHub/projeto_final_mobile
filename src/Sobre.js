import React from 'react';
import { View, Text, StyleSheet, Linking, Pressable, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>ℹ️ Sobre o Aplicativo</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Este aplicativo foi desenvolvido com o objetivo de reunir 4 diferentes projetos realizados durante o semestre, incluindo Login, Cadastro e informativo.
        </Text>

        <Text style={styles.subtitle}>📌 Recursos disponíveis:</Text>
        <Text style={styles.listItem}>• Calculadora de IMC</Text>
        <Text style={styles.listItem}>• Lista de Tarefas</Text>
        <Text style={styles.listItem}>• Conversor de Temperatura</Text>
        <Text style={styles.listItem}>• Frases Motivacionais</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>👤 Desenvolvedor</Text>
        <Text style={styles.text}>Nome: Gabriel de Castro Silva</Text>
        <Text style={styles.text}>E-mail: gcswork25@gmail.com</Text>

        <Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/castrolink/')}>
          <Text style={styles.link}>🔗 LinkedIn</Text>
        </Pressable>
        <Pressable onPress={() => Linking.openURL('https://github.com/CastroGitHub')}>
          <Text style={styles.link}>🔗 GitHub</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#EDE9F6',
    alignItems: 'center',
    padding: 25,
    paddingBottom: 50,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 35,
    color: '#4B008A',
    textAlign: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: '#F4E9FF',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#8A2BFF',
    padding: 22,
    marginBottom: 30,
    elevation: 7,
    shadowColor: '#8A2BFF',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 7,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B008A',
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    color: '#3A005F',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 17,
    color: '#3A005F',
    marginLeft: 12,
    marginBottom: 6,
  },
  link: {
    fontSize: 17,
    color: '#8A2BFF',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
