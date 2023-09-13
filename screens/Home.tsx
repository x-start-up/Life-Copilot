import React from "react";
import { Text, View } from "react-native";
import HeaderBar from "~/components/HeaderBar";
import TodoListItem from "~/components/TodoListView";

import Micro from "~/components/Micro";

type Props = {};

const Home = (props: Props) => {
  return (
    <View className="w-full h-screen">
      <HeaderBar></HeaderBar>
      <View className="bg-[#EEEEF0] h-full">
        <TodoListItem
          title={"Copilot项目搭建"}
          period={"9:45–11:00 AM"}
          priority="High"
        />

        <TodoListItem
          title={"Client  issue fix"}
          period={"9:45–11:00 AM"}
          priority="Medium"
        />

        <TodoListItem
          title={"完成todo list view"}
          period={"9:45–11:00 AM"}
          priority="Low"
        />
      </View>
      <Micro></Micro>
    </View>
  );
};

export default Home;
