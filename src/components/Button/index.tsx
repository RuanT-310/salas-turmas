import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function Button({ title, ...props }) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}