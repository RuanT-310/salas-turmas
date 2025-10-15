import AsyncStorage from "@react-native-async-storage/async-storage";

// Chave principal para armazenar todas as turmas
const GROUP_COLLECTION = "@igniteteams:groups";

// --- TIPOS DE DADOS ---

// Define como um jogador é armazenado
export type PlayerStorageDTO = {
  name: string;
  team: 'A' | 'B'; // Cada jogador pertence ao time A ou B
}

// Define como uma turma (com seus jogadores) é armazenada
export type GroupStorageDTO = {
  id: string; // ID único para a turma
  name: string; // Nome da turma
  players: PlayerStorageDTO[]; // Lista de jogadores na turma
}

/**
 * @description Busca todas as turmas salvas.
 * @returns {Promise<GroupStorageDTO[]>} Uma lista de todas as turmas.
 */
async function getAllGroups(): Promise<GroupStorageDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION);
    return storage ? JSON.parse(storage) : [];
  } catch (error) {
    throw new Error("GROUP_GET_ALL: " + error);
  }
}

/**
 * @description Busca jogadores de uma turma específica e de um time específico.
 * @param groupId O ID da turma.
 * @param team O time ('A' ou 'B').
 * @returns {Promise<PlayerStorageDTO[]>} A lista de jogadores do time.
 */
async function getPlayersByGroupAndTeam(groupId: string, team: 'A' | 'B'): Promise<PlayerStorageDTO[]> {
  try {
    const groups = await getAllGroups();
    const group = groups.find(g => g.id === groupId);

    if (!group) {
      return []; // Se a turma não for encontrada, retorna lista vazia
    }
    
    // Filtra os jogadores da turma pelo time especificado
    return group.players.filter(player => player.team === team);
  } catch (error) {
    throw new Error("PLAYER_GET_BY_GROUP_AND_TEAM: " + error);
  }
}

/**
 * @description Cria uma nova turma.
 * @param newGroup O objeto da nova turma a ser criada.
 */
async function createGroup(newGroup: GroupStorageDTO): Promise<void> {
  try {
    const storedGroups = await getAllGroups();

    // Verifica se já existe uma turma com o mesmo nome
    const groupAlreadyExists = storedGroups.some(group => group.name === newGroup.name);
    if (groupAlreadyExists) {
      throw new Error("Já existe uma turma cadastrada com esse nome.");
    }

    const newGroups = [...storedGroups, newGroup];
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));
  } catch (error) {
    throw error; // Repassa o erro para ser tratado na UI
  }
}

/**
 * @description Adiciona um novo jogador a uma turma.
 * @param newPlayer O jogador a ser adicionado.
 * @param groupId O ID da turma onde o jogador será adicionado.
 */
async function addPlayerToGroup(newPlayer: PlayerStorageDTO, groupId: string): Promise<void> {
  try {
    const storedGroups = await getAllGroups();
    const group = storedGroups.find(g => g.id === groupId);

    if (!group) {
      throw new Error("Turma não encontrada.");
    }

    // Verifica se o jogador já existe na turma (em qualquer time)
    const playerAlreadyExists = group.players.some(p => p.name === newPlayer.name);
    if (playerAlreadyExists) {
      throw new Error("Essa pessoa já está adicionada em um time aqui.");
    }

    // Adiciona o novo jogador
    group.players.push(newPlayer);
    
    // Atualiza a lista de turmas
    const updatedGroups = storedGroups.map(g => g.id === groupId ? group : g);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(updatedGroups));
  } catch (error) {
    throw error;
  }
}

/**
 * @description Remove um jogador de uma turma.
 * @param playerName O nome do jogador a ser removido.
 * @param groupId O ID da turma.
 */
async function removePlayerFromGroup(playerName: string, groupId: string): Promise<void> {
  try {
    const storedGroups = await getAllGroups();
    const group = storedGroups.find(g => g.id === groupId);

    if (!group) {
      throw new Error("Turma não encontrada.");
    }

    // Filtra para remover o jogador
    group.players = group.players.filter(p => p.name !== playerName);

    // Atualiza a lista de turmas
    const updatedGroups = storedGroups.map(g => g.id === groupId ? group : g);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(updatedGroups));
  } catch (error) {
    throw new Error("PLAYER_REMOVE: " + error);
  }
}

/**
 * @description Remove uma turma pelo seu ID.
 * @param groupId O ID da turma a ser removida.
 */
async function removeGroupById(groupId: string): Promise<void> {
  try {
    const storedGroups = await getAllGroups();
    const updatedGroups = storedGroups.filter(group => group.id !== groupId);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(updatedGroups));
  } catch (error) {
    throw new Error("GROUP_REMOVE: " + error);
  }
}

// Exporta todas as funções para serem usadas no aplicativo
export const groupStorage = {
  createGroup,
  getAllGroups,
  addPlayerToGroup,
  getPlayersByGroupAndTeam,
  removePlayerFromGroup,
  removeGroupById,
};