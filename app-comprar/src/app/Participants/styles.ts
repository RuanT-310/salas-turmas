import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flex: 1, // Ocupa toda a tela
    backgroundColor: '#131016', // Cor de fundo escura
    padding: 24, // Espaçamento interno
  },
  // Título principal ("Nome da turma")
  groupName: {
    color: '#FDFCFE', // Cor do texto (branco)
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48, // Margem no topo
  },
  // Subtítulo ("adicione a galera...")
  groupDescription: {
    color: '#6B6B6B', // Cor do texto (cinza)
    fontSize: 16,
  },
  // Container do formulário (input + botão)
  form: {
    width: '100%',
    flexDirection: 'row', // Alinha os itens horizontalmente
    marginTop: 36,
    marginBottom: 42,
  },
  // Campo de texto para o nome do participante
  input: {
    flex: 1, // Ocupa o espaço disponível
    height: 56,
    backgroundColor: '#1F1E25', // Cor de fundo do input
    borderRadius: 5,
    color: '#FFF', // Cor do texto digitado
    padding: 16,
    fontSize: 16,
    marginRight: 12, // Margem à direita para separar do botão
  },
  // Botão de adicionar (+)
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67', // Cor de fundo verde
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
  },
  // Texto do botão de adicionar (+)
  addButtonText: {
    color: '#FFF',
    fontSize: 24,
  },
  // Cabeçalho da lista (botões de time + contador)
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  // Container para os botões "TIME A" e "TIME B"
  teamsContainer: {
    flexDirection: 'row',
  },
  // Estilo base para os botões de time
  teamButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 12,
  },
  // Estilo para o botão de time quando está ativo/selecionado
  teamButtonActive: {
    borderWidth: 1,
    borderColor: '#31CF67', // Borda verde
  },
  // Texto dentro dos botões de time
  teamText: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Contador de participantes
  participantCount: {
    color: '#6B6B6B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Texto exibido quando a lista está vazia
  emptyListText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
  // Botão "Remover turma"
  removeGroupButton: {
    height: 56,
    backgroundColor: '#E23C44', // Cor de fundo vermelha
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  // Texto do botão "Remover turma"
  removeGroupButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});