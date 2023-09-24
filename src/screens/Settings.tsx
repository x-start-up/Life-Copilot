import React from "react";
import { View, Button } from "react-native";
import { router } from 'expo-router';

type Props = {};

const Settings = (props: Props) => {
  return (
    <View className="w-full h-screen">
        <View className="bg-white h-36 shadow-sm flex justify-center items-center">
            <Button onPress={() => { router.replace('/')}} title="返回首页"/>
        </View>
    </View>
  );
};

export default Settings;
