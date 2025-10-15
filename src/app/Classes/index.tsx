import { useState, useCallback } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { styles } from "./styles";
import { Button } from "@/components/Button";
import { groupStorage, GroupStorageDTO } from "@/storage/itemStorage";

export function Classes() {
  const [groups, setGroups] = useState<GroupStorageDTO[]>([]); // Estado para armazenar as turmas
  const navigation = useNavigation();

  /**
   * Navega para a tela de criação de uma nova turma.
   */
  function handleNavigateToNew() {
    navigation.navigate('home'); // Certifique-se de que 'home' é o nome da sua rota de criação
  }

  /**
   * Navega para a tela de participantes da turma selecionada.
   */
  function handleOpenGroup(groupId: string, groupName: string) {
    navigation.navigate('Participants', { groupId, groupName }); // Passa o ID e o nome como parâmetros
  }

  /**
   * Busca todas as turmas salvas no armazenamento.
   */
  async function fetchGroups() {
    try {
      const data = await groupStorage.getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas.');
    }
  }

  // useFocusEffect é chamado toda vez que a tela entra em foco
  useFocusEffect(
    useCallback(() => {
      fetchGroups(); // Busca os dados atualizados
    }, [])
  );

  return (
    <View style={styles.container}>
      {/* Logo da Aplicação */}
      <Image
        source={require("@/assets/logo.png")} // **Verifique este caminho**
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Título da Tela */}
      <Text style={styles.title}>Turmas</Text>
      <Text style={styles.subtitle}>jogue com a sua turma</Text>

      {/* Lista de Turmas */}
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.classCard} 
            onPress={() => handleOpenGroup(item.id, item.name)}
          >
            <Image
              source={require("@/assets/group.png")} // **Verifique este caminho**
              style={styles.classIcon}
              resizeMode="contain"
            />
            <Text style={styles.className}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={groups.length === 0 ? { flex: 1, justifyContent: 'center' } : styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{alignItems: 'center'}}>
             <Text style={styles.emptyListText}>
              Nenhuma turma encontrada. {'\n'}
              Que tal cadastrar a primeira?
            </Text>
          </View>
        )}
      />

      {/* Botão para criar nova turma */}
      <Button title="Criar nova turma" onPress={handleNavigateToNew} />
    </View>
  );
}