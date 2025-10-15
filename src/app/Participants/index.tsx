import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { Participant } from '@/components/Participant';
import { groupStorage, PlayerStorageDTO } from '@/storage/itemStorage'; // Importe a lógica de armazenamento

export function Participants() {
  // Estados da UI
  const [selectedTeam, setSelectedTeam] = useState<'A' | 'B'>('A');
  const [participantName, setParticipantName] = useState('');
  
  // Estado para armazenar os jogadores buscados do storage
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  
  // Recebe os parâmetros passados pela navegação
  const { groupId, groupName } = route.params as { groupId: string; groupName: string };

  /**
   * Adiciona um novo participante ao time selecionado na turma atual.
   */
  async function handleAddParticipant() {
    const trimmedName = participantName.trim();
    if (!trimmedName) {
      return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar.');
    }

    const newPlayer: PlayerStorageDTO = {
      name: trimmedName,
      team: selectedTeam,
    };

    try {
      await groupStorage.addPlayerToGroup(newPlayer, groupId);
      setParticipantName('');
      fetchPlayersByTeam(); // Re-busca os jogadores para atualizar a lista
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
      }
    }
  }

  /**
   * Busca os jogadores do time selecionado no momento.
   */
  async function fetchPlayersByTeam() {
    try {
      const playersData = await groupStorage.getPlayersByGroupAndTeam(groupId, selectedTeam);
      setPlayers(playersData);
    } catch (error) {
      console.log(error);
      Alert.alert('Pessoas', 'Não foi possível carregar as pessoas do time selecionado.');
    }
  }

  /**
   * Remove um participante da turma.
   */
  async function removeParticipant(playerName: string) {
    try {
      await groupStorage.removePlayerFromGroup(playerName, groupId);
      fetchPlayersByTeam(); // Atualiza a lista após a remoção
    } catch (error) {
      console.log(error);
      Alert.alert('Remover pessoa', 'Não foi possível remover essa pessoa.');
    }
  }

  /**
   * Abre o alerta de confirmação para remover um participante.
   */
  function handleRemoveParticipant(playerName: string) {
    Alert.alert('Remover', `Deseja remover ${playerName}?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeParticipant(playerName) },
    ]);
  }

  /**
   * Remove a turma inteira.
   */
  async function removeGroup() {
    try {
      await groupStorage.removeGroupById(groupId);
      navigation.navigate('Turmas'); // Volta para a tela de listagem de turmas
    } catch (error) {
      console.log(error);
      Alert.alert('Remover Turma', 'Não foi possível remover a turma.');
    }
  }

  /**
   * Abre o alerta de confirmação para remover a turma.
   */
  function handleRemoveGroup() {
    Alert.alert('Remover Turma', 'Tem certeza que deseja remover esta turma?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => removeGroup() },
    ]);
  }


  // useEffect é acionado sempre que o 'selectedTeam' mudar, buscando os jogadores do novo time.
  useEffect(() => {
    fetchPlayersByTeam();
  }, [selectedTeam]);

  return (
    <View style={styles.container}>
      {/* Aqui você pode adicionar um Header customizado com botão de voltar e logo */}
      
      <Text style={styles.groupName}>{groupName}</Text>
      <Text style={styles.groupDescription}>adicione a galera e separe os times</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
          onSubmitEditing={handleAddParticipant}
          returnKeyType="done"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddParticipant}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <View style={styles.teamsContainer}>
          <TouchableOpacity 
            style={[styles.teamButton, selectedTeam === 'A' && styles.teamButtonActive]} 
            onPress={() => setSelectedTeam('A')}
          >
            <Text style={styles.teamText}>TIME A</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.teamButton, selectedTeam === 'B' && styles.teamButtonActive]} 
            onPress={() => setSelectedTeam('B')}
          >
            <Text style={styles.teamText}>TIME B</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.participantCount}>{players.length}</Text>
      </View>
      
      <FlatList
        data={players}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Participant 
            name={item.name} 
            onRemove={() => handleRemoveParticipant(item.name)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhum participante neste time. Que tal adicionar alguém?
          </Text>
        )}
        contentContainerStyle={players.length === 0 && { flex: 1, justifyContent: 'center' }}
      />

      <TouchableOpacity style={styles.removeGroupButton} onPress={handleRemoveGroup}>
        <Text style={styles.removeGroupButtonText}>Remover turma</Text>
      </TouchableOpacity>
    </View>
  );
}