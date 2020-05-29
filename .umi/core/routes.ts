// @ts-nocheck
import { ApplyPluginsType } from 'D:/VRV/prisonBreak/antd/hello/antd-course/node_modules/_@umijs_runtime@3.2.3@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('D:/VRV/prisonBreak/antd/hello/antd-course/page/HelloWorld').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
