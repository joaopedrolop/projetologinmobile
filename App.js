import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
export default function App() {
  return (
<ImageBackground style={styles.container} source={require("./src/assets/images/wallpaper.jpg")} resizeMode="cover">
<AntDesign name="login" size={45} color="#743014" />
<Text style={styles.texto}>Faça login no nosso site :D</Text>
<TextInput style={styles.input}
placeholder='digite seu nome'
placeholderTextColor="#e5d1a4"
/>

<TextInput  style={styles.input} 
placeholder='digite seu Email'
placeholderTextColor="#e5d1a4"
/>

<TextInput  style={styles.input} 
placeholder='digite sua Senha'
placeholderTextColor="#e5d1a4"
secureTextEntry={true}
/>


<TouchableOpacity style={styles.btn}>
<Text style={styles.text}>
 fazer login 
</Text>
</TouchableOpacity>
</ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
  input: {
color: "#e5d1a4",
width: 250,
padding: 10,
borderBottomWidth: 1,
borderBlockColor: "red"
},
btn:{
  width: 125,
  padding:20,
  backgroundColor:"transparent",
  color:"#78898F",
  alignItems:"center",
  marginTop:10,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: "#78898F",
},
text:{
  color:"#e8d1a7",


},
texto:{
  fontSize: 30,
  color: "#e8d1a7",
}
});
