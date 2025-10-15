import { useState } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";

export function NewClass() {
  const [className, setClassName] = useState("");
  const navigation = useNavigation();

  function handleCreate() {
    if (!className.trim()) {
      return;
    }

    console.log("Turma criada:", className);
    // Aqui você pode navegar para a lista de turmas, se quiser:
    // navigation.navigate("Groups");
    setClassName("");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.svg")} // Ícone de grupo
        style={styles.icon}
        resizeMode="contain"
      />

      <Text style={styles.title}>Nova Turma</Text>
      <Text style={styles.subtitle}>
        crie uma turma para adicionar pessoas
      </Text>

      <Input
        placeholder="Nome da turma"
        value={className}
        onChangeText={setClassName}
      />

      <Button title="Criar" onPress={handleCreate} />
    </View>
  );
}
