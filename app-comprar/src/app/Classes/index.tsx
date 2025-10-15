import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import { Button } from "@/components/Button";

type ClassData = {
  id: string;
  name: string;
};

export function Classes() {
  const [classes, setClasses] = useState<ClassData[]>([
    { id: "1", name: "Nome da turma" },
    { id: "2", name: "Nome da turma" },
  ]);

  function handleCreateNewClass() {
    console.log("Criar nova turma");
    // Aqui você pode abrir um modal ou navegar para outra tela
  }

  return (
    <View style={styles.container}>
      {/* Logo */}
      {/* <Image
        source={require("@/assets/logo.png")} // substitua pelo seu caminho correto
        style={styles.logo}
        resizeMode="contain"
      /> */}

      {/* Título */}
      <Text style={styles.title}>Turmas</Text>
      <Text style={styles.subtitle}>jogue com a sua turma</Text>

      {/* Lista de turmas */}
      <FlatList
        data={classes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.classCard}>
            {/* <Image
              source={require("@/assets/users.png")} // ícone de grupo
              style={styles.classIcon}
              resizeMode="contain"
            /> */}
            <Text style={styles.className}>{item.name}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Botão */}
      <Button title="Criar nova turma" onPress={handleCreateNewClass} />
    </View>
  );
}
