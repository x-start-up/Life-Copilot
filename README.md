# Life-Copilot

## 开发技术栈
NativeWind + Expo。支持 IOS/Android/Web

## 试图做成什么？
尽可能简洁直观的 TODO 录入 + 明显高效的信息提醒系统

## 核心功能
whisper 接收语音消息转文字 -> llm 解析为 todo 的格式化 json -> 更新 TODO 到 DB
提供 .ics 文件接口，同步到已订阅的日历软件
可选通知方式 [app/微信/邮件/webhook]
交互
希望提供跨端体验，含 iOS/安卓/macOS/win/web，交互体验上接近「飞书任务」即可，去掉「飞书任务」的协同部分+附件部分

创建 TODO 分三种方式，自然语言/语音/传统表单

自然语言表现为首屏下方的输入框（类似 chatgpt），输入后直接创建 TODO 到首屏上方 TODO list；

语音表现为首屏右下角切换按钮将输入框变成语音按钮（交互类似 微信），点击开始录音，录音完成后（请求后端接口）弹出表单，将后端返回的内容设置为表单的默认内容，待用户确认无误后点击完成创建

传统表单见图

### 首屏

![homepage](./docs/index.jpg)

## Todo

1. UI/UX 
      1. - [x] 首页
      2. - [ ]  设置页
      3. - [ ]  弹出表单页

2. 开发
   1. - [ ] 兜底 & 项目初始化 @zreren
   2. - [ ] 登陆/注册页 @Peek-A-Booo
   3. - [ ] 首屏布局 @Winter-J-27
   4. - [ ] todo list 布局 @leewei0923
   5. - [ ] todo list 逻辑&测试
   6. - [ ] 自然语言输入框
   7. - [ ] 自然语言输入框逻辑&测试
   8. - [ ] 语音输入组件
   9. - [ ] 语音输入逻辑&测试
   10. - [ ] 切换按钮 & 逻辑 & 测试
   11. - [ ] 表单实现
   12. - [ ] 表单逻辑 & 测试
   13. - [ ] 表单逻辑 & 测试
   14. - [ ] 语音输入预填表单逻辑 & 测试
   15. - [ ] 消息通知逻辑
   16. - [ ] 设置页 @Remember11
   17. - [ ] 设置页选择通知方式

> 没有 UI 的情况下可以先写逻辑

## 启动项目

> 项目环境 node 18.1.0

初始化

依赖安装
```bash
yarn
```

web启动
```bash
yarn web
```

ios启动
```bash
npm run ios
```

安卓启动
```bash
npm run android
```




