import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

// Você pode usar um ícone de uma biblioteca como @expo/vector-icons
// import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      {/* <MaterialCommunityIcons name="account-circle" size={24} color="#808080" /> */}
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}