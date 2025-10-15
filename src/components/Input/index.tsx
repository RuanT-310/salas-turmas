import { TextInput } from 'react-native';
import { styles } from './styles';

// Usa ...props para passar todas as outras propriedades (value, onChangeText, etc.)
export function Input({ ...props }) {
  return (
    <TextInput 
      style={styles.container}
      placeholderTextColor="#7C7C8A" // Cor para o texto do placeholder
      {...props}
    />
  );
}