import { View ,Text,TouchableOpacity, ScrollView,Image} from "react-native";
import { styles } from "../../../assets/styles/sheikhStyles";
import { sheikhs } from "../../../assets/data/sheikhs";
import {  useRouter } from "expo-router";

export default function Tertil() {
  const router = useRouter();

  return (
    <ScrollView style={{flex:1, flexDirection:'column'}}>
    <View style={styles.container}>
        {sheikhs.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={
              styles.button}
              onPress={() => router.push({ pathname: './sheikhSoura', params: { name: item.name, image: item.image } })}              >
            <Image source={item.image} style={styles.image}></Image>
            <Text style={styles.text}>{item.name} </Text>
          </TouchableOpacity>
        ))}
      </View>
      </ScrollView>
  );
}
