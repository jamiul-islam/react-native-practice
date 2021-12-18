// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Button,
//   Alert,
//   Text,
//   View,
//   Image,
//   SafeAreaView,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   TouchableHighlight,
//   TouchableNativeFeedback,
//   Platform,
// } from "react-native";

// export default function App() {
//   console.log("app executed");
//   // let x;
//   // x.toString();
//   const handlePress = () => {
//     // console.log("clicked");
//     alert("button Clicked");
//   };

//   return (
//     <View
//       style={[
//         styles.container,
//         // containerStyle
//       ]}
//     >
//       <Text
//         style={{ paddingBottom: 10 }}
//         numberOfLines={1}
//         onPress={handlePress}
//       >
//         Hello World!
//       </Text>
//       {/* <Image source={require("./assets/icon.png")} /> */}
//       <TouchableHighlight
//         style={{ paddingBottom: 10 }}
//         onPress={() => console.log("image tapped")}
//       >
//         {/* <Image
//           fadeDuration={1000}
//           blurRadius={1}
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/200/300",
//           }}
//         /> */}
//         <View
//           style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
//         ></View>
//       </TouchableHighlight>
//       {/* <Button title="click me" onPress={handlePress} /> */}
//       {/* ios only */}
//       {/* <Button
//         title="click me"
//         onPress={() =>
//           Alert.prompt("alert title", "alert message", (text) =>
//             console.log(text)
//           )
//         }
//       /> */}
//       <Button
//         title="click me"
//         onPress={() =>
//           Alert.alert("alert title", "alert message", [
//             { text: "Yes", onPress: () => console.log("yes tapped") },
//             { text: "No", onPress: () => console.log("no tapped") },
//           ])
//         }
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// // const containerStyle = { backgroundColor: "green" };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: Platform.OS === "android" ? 20 : 0,
//   },
// });
