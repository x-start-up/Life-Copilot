import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";

export default function Micro() {
  return (
    <TouchableOpacity className="absolute w-full z-30 flex justify-center   flex-row   items-center  rounded-full bottom-24">
      <View className="bg-[#007AFF] w-[72px] h-[72px] p-1  rounded-full">
        <View className="border border-white rounded-full w-full h-full  flex  flex-row  justify-center  items-center ">
          <Image
            style={{ width: 20, height: 30 }}
            source={require("~/assets/micfill.png")}
          ></Image>
        </View>
      </View>
    </TouchableOpacity>
  );
}
