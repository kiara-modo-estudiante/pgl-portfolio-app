import { useState } from "react";
import { View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Navbar from "./components/Navbar";
import { globalStyles } from "./styles";
import Card from "./components/Card";
import List from "./components/List";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  return (
    <View style={globalStyles.container}>
      <Navbar setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={globalStyles.bodystails}>
          <Card />
          <List />
        </View>
      ) : (
        <View style={globalStyles.bodystails}>
          <View style={globalStyles.CentrarcodigoQR}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      )}
    </View>
  );
}
