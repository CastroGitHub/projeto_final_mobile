import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import rangePicker from './util/rangePicker.js';

export default function FrasesScreen() {

  const [phrase, setPhrase] = useState('Toque em "Gerar" para receber motivação!');
  const [list] = useState([
    "Você é mais forte do que imagina.",
    "Um passo por dia ainda é progresso.",
    "O resultado vem para quem não desiste.",
    "Disciplina vence a motivação.",
    "O impossível é apenas o possível atrasado.",
    "Seja constante, mesmo pequeno.",
    "Não espere, construa.",
    "Tudo muda quando você muda.",
    "A vida recompensa quem tenta.",
    "Você só precisa começar."
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Frases Motivacionais </Text>

      <View style={styles.card}>
        <Text style={styles.cardText}>{phrase}</Text>
      </View>

      <View style={styles.actionRow}>
        <Pressable
          style={styles.buttonPrimary}
          onPress={() => setPhrase(list[rangePicker(0, list.length - 1)])}
        >
          <Text style={styles.buttonLabel}>Gerar</Text>
        </Pressable>

        <Pressable
          style={styles.buttonSecondary}
          onPress={() => setPhrase('Mensagem apagada')}
        >
          <Text style={styles.buttonLabel}>Limpar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5E5', // vermelho claro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#A30000', // vermelho escuro
  },
  card: {
    backgroundColor: '#FFECEC', // fundo rosado claro
    borderWidth: 2,
    borderColor: '#CC0000', // borda vermelha vibrante
    borderRadius: 12,
    width: '100%',
    minHeight: 170,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    marginBottom: 30,
    elevation: 7,
    shadowColor: '#CC0000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
  },
  cardText: {
    fontSize: 23,
    textAlign: 'center',
    color: '#7A0000', // vermelho queimado para boa leitura
    fontWeight: '600',
  },
  actionRow: {
    flexDirection: 'row',
    gap: 15,
  },
  buttonPrimary: {
    backgroundColor: '#D10000', // botão principal vermelho forte
    borderRadius: 10,
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#D10000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
  },
  buttonSecondary: {
    backgroundColor: '#FF4D4D', // vermelho mais claro para contraste
    borderRadius: 10,
    width: 130,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#FF4D4D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 7,
  },
  buttonLabel: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
