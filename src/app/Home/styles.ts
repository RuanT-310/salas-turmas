import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container principal
  container: {
    flex: 1,
    backgroundColor: '#121214', // Cor de fundo escura
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32, // Espaçamento geral
  },
  // Ícone de grupo
  icon: {
    width: 56,
    height: 56,
    marginBottom: 32, // Espaço abaixo do ícone
  },
  // Título "Nova turma"
  title: {
    fontSize: 24,
    color: '#E1E1E6', // Branco suave
    fontWeight: 'bold',
    marginBottom: 8, // Espaço abaixo do título
  },
  // Subtítulo "crie uma turma..."
  subtitle: {
    color: '#A8A8B3', // Cinza claro
    fontSize: 16,
    marginBottom: 48, // Espaço grande antes do formulário
  },
});