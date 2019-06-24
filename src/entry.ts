// Import vue components
import { AntdMobileVueSample, Button } from './lib-components/index';
import { VueConstructor } from 'vue/types';

// install function executed by Vue.use()
// function install(Vue) {
//   if (install.installed) { return; }
//   install.installed = true;
//   Object.keys(components).forEach((componentName) => {
//     Vue.component(componentName, components[componentName]);
//   });
// }


declare global {
  interface Window {
    Vue?: VueConstructor;
  }
}

const components = [
  AntdMobileVueSample,
  Button,
];

const install = (Vue: VueConstructor) => {
  components.forEach((Component) => {
    Vue.use(Component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  AntdMobileVueSample,
  Button,
};

export default {
  install,
  ...components,
};
