import React from "react";
import { Text, View } from "react-native";
import HeaderBar from "../../src/components/HeaderBar";
import TodoListItem from "../../src/components/TodoListItem";

import Micro from "../../src/components/Micro";

type Props = {};

const Home = (props: Props) => {
  return (
    <View className="w-full h-screen">
      <HeaderBar></HeaderBar>
      <View className="bg-[#EEEEF0] h-full px-5">
        <TodoListItem
          title={"Copilot项目搭建"}
          startTime={"1694654100"}
          endTime={"1694675700"}
          priority="High"
        />

        <TodoListItem
          title={"Client  issue fix"}
            startTime={"1694654100"}
            endTime={"1694675700"}
          priority="Medium"
        />

        <TodoListItem
          title={"完成todo list view"}
            startTime={"1694654100"}
            endTime={"1694675700"}
          priority="Low"
        />
      </View>
      <Micro></Micro>
    </View>
  );
};

export default Home;
