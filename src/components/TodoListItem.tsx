import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  priority?: "High" | "Medium" | "Low"; // 重要程度 红，黄，蓝
  title: string; // 标题 Copilot项目搭建
  startTime: string; // Unix时间戳: 1629720000  
  endTime: string;   // Unix时间戳: 1629720000  
};

export default function TodoListItem(props: Props) {
  const priority = props.priority ?? "Low";
  const { title, startTime, endTime } = props;
 // 转换Unix时间戳字符串为日期对象
  const formatTime = (timestamp: string) => {
    const date = new Date(parseInt(timestamp, 10) * 1000);
    return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  }
  const priorityColors: {
    [key: string]: {
      background: string;
      fontColor: string;
    };
  } = {
    High: {
      background: "bg-[#EB445A]",
      fontColor: "text-[#EB445A]",
    },
    Medium: {
      background: "bg-[#F4B856]",
      fontColor: "text-[#F4B856]",
    },
    Low: {
      background: "bg-[#19A9EA]",
      fontColor: "text-[#19A9EA]",
    },
  };

  return (
    <TouchableOpacity style={{}} activeOpacity={0.7}>
      <View className="w-full flex justify-center items-center mt-3">
        <View className="bg-white h-20 w-full px-4 rounded-xl flex flex-row justify-between items-center">
          <View
            className={`w-[4] h-11 rounded-sm ${priorityColors[priority].background}`}
          ></View>

          <View className="w-4/5">
            <Text
              className={`w-full h-7 text-lg font-semibold ${priorityColors[priority].fontColor} whitespace-nowrap overflow-hidden text-ellipsis`}
            >
              {title}
            </Text>
            <Text className="text-sm">{formatTime(startTime)} - 
 {formatTime(endTime)}</Text>
          </View>

          <View
            className={`w-6 h-6 rounded-full ${priorityColors[priority].background} flex`}
          >
            <View className="w-3 h-3 bg-white m-auto rounded-full"></View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
