import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import { styles } from './styles'; // Estilos para esta tela
import { Participant } from '@/components/Participant'; // Importe o componente criado acima

// Define o tipo para um participante
export type ParticipantType = {
  id: string;
  name: string;
}

export function Participants() {
  // Estado para o time selecionado ('A' ou 'B')
  const [selectedTeam, setSelectedTeam] = useState<'A' | 'B'>('A');
  
  // Estado para o texto do input
  const [participantName, setParticipantName] = useState('');

  // Estado que armazena os participantes de cada time
  const [teams, setTeams] = useState<{ A: ParticipantType[], B: ParticipantType[] }>({
    A: [
      { id: '1', name: 'João da Silva' },
      { id: '2', name: 'Carlos Eduardo' },
    ],
    B: [],
  });

  // Função para adicionar um novo participante
  function handleAddParticipant() {
    if (!participantName.trim()) {
      return Alert.alert('Participante Vazio', 'Por favor, informe o nome do participante.');
    }

    const newParticipant: ParticipantType = {
      id: String(new Date().getTime()), // ID único baseado no tempo
      name: participantName.trim(),
    };

    // Adiciona o novo participante ao time que está selecionado
    setTeams(prevTeams => ({
      ...prevTeams,
      [selectedTeam]: [...prevTeams[selectedTeam], newParticipant]
    }));

    setParticipantName(''); // Limpa o campo de texto
  };

  // Função para remover um participante
  function handleRemoveParticipant(id: string) {
    Alert.alert(
      'Remover Participante',
      'Tem certeza que deseja remover este participante?',
      [
        { text: 'Não', style: 'cancel' },
        { 
          text: 'Sim', 
          onPress: () => setTeams(prevTeams => ({
            ...prevTeams,
            [selectedTeam]: prevTeams[selectedTeam].filter(p => p.id !== id)
          }))
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} />
      
      <Text style={styles.groupName}>Nome da turma</Text>
      <Text style={styles.groupDescription}>adicione a galera e separe os times</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantName}
          value={participantName}
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
        <Text style={styles.participantCount}>{teams[selectedTeam].length}</Text>
      </View>
      
      <FlatList
        data={teams[selectedTeam]}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Participant 
            name={item.name} 
            onRemove={() => handleRemoveParticipant(item.id)} 
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhum participante neste time. Que tal adicionar alguém?
          </Text>
        )}
        contentContainerStyle={teams[selectedTeam].length === 0 && { flex: 1, justifyContent: 'center' }}
      />

      <TouchableOpacity style={styles.removeGroupButton}>
        <Text style={styles.removeGroupButtonText}>Remover turma</Text>
      </TouchableOpacity>
    </View>
  );
}