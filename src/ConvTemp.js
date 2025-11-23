import { useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function ConvTempScreen() {
  const [temp, setTemp] = useState(''); 
  const [tipo, setTipo] = useState(''); 
  const [tipo2, setTipo2] = useState(''); 
  const [resultado, setResultado] = useState(''); 

  const Conversor = () => {
    const value = parseFloat(temp.replace(',', '.'));

    if (isNaN(value)) {
      setResultado('Digite a temperatura para conversão!');
      return;
    }

    let result= '';

    if (tipo === 'C' && tipo2 === 'K') {
      result= value + 273.15;
    } 
    else if (tipo === 'C' && tipo2 === 'F') {
      result= (value * 1.8) + 32;
    } 
    else if (tipo === 'K' && tipo2 === 'C') {
      result= value - 273.15;
    } 
    else if (tipo === 'K' && tipo2 === 'F') {
      result= (value * 1.8) - 459.67;
    } 
    else if (tipo === 'F' && tipo2 === 'C') {
      result= (value - 32) / 1.8;
    } 
    else if (tipo === 'F' && tipo2 === 'K') {
      result= (value + 459.67) / 1.8;
    } 
    else {
      result= 'Selecione as duas unidades!';
    }

    setResultado(String(result));
  };

  return (
    <View style={styles.geral}>
      <Text style={styles.titulo}> CONVERSOR DE TEMPERATURA</Text>
      
      <View style={styles.card}>
        <Text style={styles.textos}>Temperatura para conversão:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 25.5"
          keyboardType="numeric"
          value={temp}
          onChangeText={setTemp}
          placeholderTextColor="#A9A9A9"
        />

        <Text style={styles.textos}>De:</Text>
        <View style={styles.pickerGeral}>
          <Picker
            selectedValue={tipo}
            onValueChange={setTipo}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Celsius (°C)" value="C" />
            <Picker.Item label="Fahrenheit (°F)" value="F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
        </View>

        <Text style={styles.textos}>Para:</Text>
        <View style={styles.pickerGeral}>
          <Picker
            selectedValue={tipo2}
            onValueChange={setTipo2}
            style={styles.picker}
            itemStyle={styles.pickerItem}
          >
            <Picker.Item label="Selecione..." value="" />
            <Picker.Item label="Celsius (°C)" value="C" />
            <Picker.Item label="Fahrenheit (°F)" value="F" />
            <Picker.Item label="Kelvin (K)" value="K" />
          </Picker>
        </View>

        <Pressable 
          style={({ pressed }) => [
            styles.botao,
            pressed && styles.botaopres 
          ]} 
          onPress={Conversor}
          android_ripple={{ color: '#fff' }} 
        >
          <Text style={styles.botaotextos}>Converter</Text>
        </Pressable>
      </View>
      
      {resultado !== '' && (
        <View style={styles.resultadoGeral}>
          <Text style={styles.resultadotextos}>Resultado:</Text>
          <Text style={styles.resultadoValor}>{resultado}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: "#E3F2FD", // azul gelo
    paddingHorizontal: 20,
    paddingTop: 25,
    alignItems: "center",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0277BD", // azul termômetro
    marginBottom: 25,
  },

  card: {
    width: "100%",
    padding: 25,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginBottom: 25,
    shadowColor: "#0277BD",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 9,
    elevation: 6,
  },

  textos: {
    fontSize: 16,
    color: "#0097A7", // azul petróleo
    marginBottom: 6,
    fontWeight: "600",
  },

  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#4DD0E1", // verde água
    borderRadius: 12,
    padding: 10,
    fontSize: 18,
    backgroundColor: "#F0FCFF",
    color: "#0277BD",
    marginBottom: 18,
  },

  pickerGeral: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#4DD0E1",
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#F0FCFF",
  },

  picker: {
    width: "100%",
    color: "#0277BD",
  },

  pickerItem: {
    fontSize: 17,
  },

  botao: {
    marginTop: 10,
    backgroundColor: "#0288D1", // azul mais forte
    paddingVertical: 12,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
    elevation: 4,
  },

  botaopres: {
    backgroundColor: "#0277BD",
    opacity: 0.9,
  },

  botaotextos: {
    color: "#E1F5FE",
    fontWeight: "bold",
    fontSize: 18,
  },

  resultadoGeral: {
    width: "100%",
    padding: 22,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderColor: "#0288D1",
    shadowColor: "#0288D1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  resultadotextos: {
    fontSize: 20,
    color: "#0277BD",
    fontWeight: "600",
    marginBottom: 4,
  },

  resultadoValor: {
    fontSize: 30,
    fontWeight: "900",
    color: "#0277BD",
  },
});

