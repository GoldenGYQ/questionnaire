import { createApp } from 'vue'
import App from './App.vue'
// import './index.css'  // 如果你用了 Tailwind 等样式

createApp(App).mount('#app')
const styleMaterialMap = {
  '现代简约': {
    wall: ['乳胶漆', '艺术涂料', '木饰面'],
    ceiling: ['石膏板吊顶', '无主灯'],
    floor: ['灰色瓷砖', '浅色木地板']
  },
  '北欧': {
    wall: ['浅灰乳胶漆', '白色墙砖', '墙布'],
    ceiling: ['白色吊顶', '木梁吊顶'],
    floor: ['浅色复合木地板', '原木色地板']
  },
  '新中式': {
    wall: ['木饰面', '素色乳胶漆', '墙纸'],
    ceiling: ['中式木格吊顶', '石膏板'],
    floor: ['深色实木地板', '仿古砖']
  },
  '法式': {
    wall: ['护墙板', '石膏线', '浅色墙纸'],
    ceiling: ['石膏线吊顶', '水晶灯'],
    floor: ['大理石瓷砖', '拼花木地板']
  },
  '工业风': {
    wall: ['水泥灰漆', '红砖墙', '仿旧木板'],
    ceiling: ['裸顶+轨道灯', '黑色吊顶'],
    floor: ['水泥地', '深灰瓷砖']
  },
  '日式': {
    wall: ['榻榻米背景', '米白乳胶漆', '木饰面'],
    ceiling: ['原木吊顶', '简洁石膏板'],
    floor: ['榻榻米', '原木地板']
  }
};
