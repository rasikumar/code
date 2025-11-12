import { useAuth } from "@clerk/clerk-expo";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const { signOut } = useAuth();
  const handleLogout = async () => {
    try {
      await signOut(); // This actually logs out the user
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <View>
      <Text>profile</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 20,
          padding: 10,
          backgroundColor: "green",
          borderRadius: 5,
          width: 100,
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
