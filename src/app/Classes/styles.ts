import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  // Container principal da tela
  container: {
    flex: 1,
    position: "relative",
    width: "100%",
    backgroundColor: "#121214", // Fundo escuro
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    paddingTop: 60, // Espaçamento no topo para a barra de status
    paddingHorizontal: 24, // Espaçamento lateral
  },
  // Estilo para o logo no topo
  logo: {
    width: 60, // Largura do logo
    height: 60, // Altura do logo
    marginBottom: 16, // Espaçamento abaixo do logo
  },
  // Título "Turmas"
  title: {
    fontSize: 24,
    color: "#FFFFFF", // Cor do texto branca
    fontWeight: "bold",
    marginBottom: 4, // Espaçamento abaixo do título
  },
  // Subtítulo "jogue com a sua turma"
  subtitle: {
    fontSize: 14,
    color: "#A9A9A9", // Cor do texto cinza
    marginBottom: 32, // Espaçamento abaixo do subtítulo, antes da lista
  },
  // Estilo para o container da FlatList
  listContainer: {
    width: "100%",
    gap: 12, // Espaçamento entre os itens da lista
    flexGrow: 1, // Permite que a lista cresça e ocupe o espaço disponível
    paddingBottom: 20, // Espaçamento no final da lista, para o botão não ficar colado
  },
  // Estilo para cada cartão de turma
  classCard: {
    width: "320",
    flexDirection: "row", // Ícone e texto lado a lado
    alignItems: "center", // Alinha verticalmente no centro
    backgroundColor: "#202024", // Fundo do cartão (um pouco mais claro que o fundo da tela)
    paddingVertical: 18,
    paddingHorizontal: 16,
    borderRadius: 8, // Bordas arredondadas
  },
    emptyListText: {
    color: '#A9A9A9',
    fontSize: 14,
    textAlign: 'center',
  },

  // Estilo para o ícone de grupo dentro do cartão
  classIcon: {
    width: 24,
    height: 24,
    marginRight: 12, // Espaçamento à direita do ícone
    tintColor: "#00B37E", // Colore o ícone de verde suave
  },
  // Estilo para o nome da turma no cartão
  className: {
    fontSize: 16,
    color: "#E1E1E6", // Cor do texto do nome da turma
  },
});