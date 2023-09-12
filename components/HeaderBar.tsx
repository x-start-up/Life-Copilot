import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { useAssets } from "expo-asset";
import classnames from "classnames";

type Props = {};

export default function HeaderBar({}: Props) {
  const [selectTab, setSelectTab] = useState(0);

  const changeTabs = (index: number): void => {
    setSelectTab(index);
  };
  
  return (
    <View className="bg-white h-36 shadow-sm px-6 pt-8">
      <View className="flex flex-row justify-between items-center">
        <Image
          className="rounded-full"
          source="https://picsum.photos/seed/696/3000/2000"
          contentFit="cover"
          style={{ width: 42, height: 42 }}
          transition={1000}
        />
        <Image
          className=""
          source={require("~/assets/setting.png")}
          contentFit="cover"
          style={{ width: 32, height: 32 }}
          transition={1000}
        />
      </View>

      <View
        className={
          "w-full h-9 bg-[#EEEEF0] rounded-full flex flex-row mt-4 p-1"
        }
      >
        <TouchableOpacity
          onPress={() => {
            changeTabs(0);
          }}
          className="w-1/2"
        >
          <View
            className={classnames(
              "bg-white rounded-full h-full flex justify-center items-center",
              {
                "bg-[#EEEEF0]": selectTab !== 0,
              }
            )}
          >
            <Text>Today</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-1/2"
          onPress={() => {
            changeTabs(1);
          }}
        >
          <View
            className={classnames(
              "bg-white rounded-full h-full flex justify-center items-center",
              {
                "bg-[#EEEEF0]": selectTab !== 1,
              }
            )}
          >
            <Text>Pool</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
