import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

// 导入固定路由文件
const constantFiles = require.context('./constantModules', true, /\.ts$/);
console.log('constantFiles ', constantFiles);
let constantModules: Array<RouteRecordRaw> = [];
constantFiles.keys().forEach(key => {
  console.log('key ', key);
  console.log('constantFiles(key) ', constantFiles(key));
  console.log('constantFiles(key).default ', constantFiles(key).default);
  if (key === './index.ts') {
    return;
  }
  constantModules = constantModules.concat(constantFiles(key).default);
});

// 固定路由
export const constantRoutes: Array<RouteRecordRaw> = [
  ...constantModules
];

// 创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
});

export default router;
