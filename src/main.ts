import { createApp } from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router';
// 引入路由权限判断
import '@/permission';
// 引入全局样式
import '@/styles/index.scss';
// 引入加载插件的方法
import { loadAppPlugins } from './plugins';

const app = createApp(App);

// 加载所有插件
loadAppPlugins(app);

app.use(router).mount('#app');
