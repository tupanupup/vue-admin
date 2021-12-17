/**
 * 加载插件
 */
import {createApp} from 'vue';

/**
 * 加载所有插件
 * @param app 整个应用的实例
 */
export function loadAppPlugins(app: ReturnType<typeof createApp>) {
  const files = require.context('.', true, /\.ts/);
  files.keys().forEach(key => {
    if (typeof files(key).default === 'function') {
      if (key !== './index.ts') {
        files(key).default(app);
      }
    }
  });
}
