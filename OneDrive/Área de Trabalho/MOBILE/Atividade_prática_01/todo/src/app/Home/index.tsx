import {
  Alert,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <image source={require("@/assets/Logo.png")} style={styles.logo} />
    </View>
  );
}
