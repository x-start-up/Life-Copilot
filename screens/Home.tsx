import React from 'react'
import { Text, View } from "react-native";
import HeaderBar from '~/components/HeaderBar';
import Micro from '~/components/Micro';

type Props = {}

const Home = (props: Props) => {
  return (
    <View className='w-full h-screen'>
        <HeaderBar></HeaderBar>
        <View className='bg-[#EEEEF0] h-full'>
        </View>
        <Micro></Micro>
    </View>
  )
}

export default Home;