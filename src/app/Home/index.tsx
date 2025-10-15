import { useState } from "react";
import { View, Text, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid'; // Para gerar IDs únicos

import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { groupStorage } from "@/storage/itemStorage";

export function Home() {
  const [className, setClassName] = useState("");
  const navigation = useNavigation();

  /**
   * Função para criar uma nova turma e navegar para a lista de turmas.
   */
  async function handleCreate() {
    try {
      const trimmedClassName = className.trim();
      
      // 1. Validação: Verifica se o nome da turma não está vazio
      if (!trimmedClassName) {
        return Alert.alert('Nova Turma', 'Por favor, informe o nome da turma.');
      }

      // 2. Criação: Chama a função do storage para criar a nova turma
      await groupStorage.createGroup({
        id: String(uuid.v4()), // Gera um ID único para a turma
        name: trimmedClassName,
        players: [] // A turma começa sem jogadores
      });

      // 3. Redirecionamento: Navega para a tela de listagem de turmas
      // Certifique-se de que 'groups' é o nome da sua rota de listagem no Stack Navigator
      navigation.navigate('Turmas');

    } catch (error) {
      console.log(error);
      // A lógica de erro no storage já lança uma mensagem amigável
      if (error instanceof Error) {
        Alert.alert('Nova Turma', error.message);
      } else {
        Alert.alert('Nova Turma', 'Ocorreu um erro ao tentar criar a turma.');
      }
    }
  }

  return (
    <View style={styles.container}>
      {/* Imagem do grupo de usuários */}
      <Image
        source={require("@/assets/groupuser.png")} // Verifique se o caminho está correto
        style={styles.icon}
        resizeMode="contain"
      />

      <Text style={styles.title}>Nova turma</Text>
      <Text style={styles.subtitle}>
        crie uma turma para adicionar pessoas
      </Text>

      <Input
        placeholder="Nome da turma"
        value={className}
        onChangeText={setClassName}
        onSubmitEditing={handleCreate} // Opcional: permite criar ao pressionar "enter" no teclado
        returnKeyType="done"
      />

      <Button title="Criar" onPress={handleCreate} />
    </View>
  );
}