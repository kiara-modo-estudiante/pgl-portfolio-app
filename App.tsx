import { useState } from "react";
import { View } from "react-native";
import Navbar from "./components/Navbar";
import { globalStyles } from "./styles";
import AboutMe from "./pages/AboutMe";
import Repo from "./pages/Repo";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={globalStyles.container}>
      <Navbar setDisplayMyQR={setDisplayMyQR} />
      <View>{displayMyQR ? <AboutMe /> : <Repo />}</View>
    </View>
  );
}
