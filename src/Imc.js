import { useState } from "react";
import {View, Text, TextInput, StyleSheet, Pressable } from "react-native";

export default function ImcScreen(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);
  const [diag, setDiag] = useState('');

  const calcularIMC = () =>{
    if(peso && altura !== ''){
      let imc = peso.replace(",",".") / (altura.replace(",",".") * altura.replace(",","."));
      setResultado(imc.toFixed(2));

      if(imc < 18.5){
        setDiag("Magreza");
      } else if(imc >= 18.5 && imc <= 24.9){
        setDiag("Normal");
      } else if(imc >= 25 && imc <= 29.9){
        setDiag("Sobrepeso");
      } else if(imc >=  30 && imc <= 39.9){
        setDiag("Obesidade");
      } else {
        setDiag("Obesidade grave");
      }
    }else{
      alert("Por favor digite o peso e a altura corretamente");
    }
  }

  return(
    <View style={styles.app}>
      <Text style={styles.titulo}> calcule seu IMC </Text>

      <View>
        <TextInput 
          placeholder="Digite a altura"
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <TextInput 
          placeholder="Digite o Peso"
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
      </View>

      <Pressable style={styles.botaoCalcular} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      <View style={styles.apresentar}>
        <Text style={styles.textos}>Resultado: {resultado}</Text>
        <Text style={styles.textos}>Diagnóstico: {diag}</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#E6F8EF",
  },

  titulo: {
    fontSize: 38,
    marginBottom: 25,
    fontWeight: "bold",
    color: "#0E7A41",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  input: {
    margin: 15,
    borderWidth: 2,
    borderColor: "#45C77A",
    textAlign: "center",
    height: 45,
    width: 260,
    borderRadius: 25,
    backgroundColor: "#ffffff",
    color: "#0E7A41",
    fontSize: 18,
    elevation: 4,
    shadowColor: "#45C77A",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  apresentar: {
    margin: 20,
    backgroundColor: "#45C77A",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 20,
    elevation: 6,
    shadowColor: "#0E7A41",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.30,
    shadowRadius: 6,
  },

  textos: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },

  // novo estilo do botão
  botaoCalcular: {
    backgroundColor: "#0E7A41",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
