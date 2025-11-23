import { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from "react-native";

export default function ListaTarefasScreen(){
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () =>{
    if(task.trim() === "") return;
    setTasks([...tasks, {key: Math.random().toString(), value: task}]);
    setTask("");
  };

  const limparLista = () => {
    setTasks([]);
  };

  return(
    <View style = {estilos.app}>
      <Text style={estilos.titulo}>LISTA DE TAREFAS</Text>

      <TextInput
        style={estilos.input}
        placeholder="Adicionar nova tarefa..."
        onChangeText={setTask}
        value={task}
      />

      <Pressable style={estilos.botao} onPress={addTask}>
        <Text style={estilos.textoBotao}>Adicionar</Text>
      </Pressable>

      <Pressable style={estilos.botaoLimpar} onPress={limparLista}>
        <Text style={estilos.textoBotaoLimpar}>Limpar Lista</Text>
      </Pressable>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={estilos.itemContainer}>
            <Text style={estilos.tarefa}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFF4E3',
    paddingTop: 70,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#E67E22',
    marginBottom: 35,
    letterSpacing: 1,
  },

  input: {
    borderWidth: 2,
    borderColor: '#E67E22',
    borderRadius: 18,
    width: 270,
    height: 55,
    textAlign: "center",
    backgroundColor: '#ffffff',
    fontSize: 18,
    color: "#E67E22",
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#E67E22",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  botao: {
    backgroundColor: "#E67E22",
    paddingVertical: 13,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 6,
  },

  textoBotao: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoLimpar: {
    backgroundColor: "#C0392B", // vermelho temático para indicar ação destrutiva
    paddingVertical: 13,
    paddingHorizontal: 35,
    borderRadius: 25,
    marginBottom: 25,
    elevation: 6,
  },

  textoBotaoLimpar: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
    textAlign: "center",
  },

  itemContainer: {
    width: 270,
    backgroundColor: "#FFE1C4",
    borderRadius: 15,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 12,
    elevation: 3,
  },

  tarefa: {
    fontSize: 20,
    color: "#8B3E00",
    fontWeight: "bold",
    textAlign: "center",
  },
});
