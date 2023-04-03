import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Camera } from "expo-camera";

export default function CameraPage() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const onFlip = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  useEffect(() => {
    const checkPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    checkPermissions();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View style={styles.flipContainer}>
          <TouchableOpacity style={styles.flipButton} onPress={onFlip}>
            <Text style={styles.flipText}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  flipContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  flipButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 100,
    borderRadius: 10,
    backgroundColor: "tomato",
  },
  flipText: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
