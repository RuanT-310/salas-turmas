import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    // marginLeft: 12, // Descomente se for usar o ícone
  },
  button: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#E23C44', // Vermelho para o "X"
    fontSize: 24,
  },
});