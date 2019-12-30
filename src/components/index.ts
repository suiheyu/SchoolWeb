import Vue from 'vue'


const requireComponent = require.context(
  //扫描路径
  '.',
  //是否查询子目录
  true,
  //匹配文件
  /[\w-]+\.vue$/
)

export default function registryComponent(){

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  // Get the component config
  const componentConfig = requireComponent(fileName)
  // Get the PascalCase version of the component name
  const componentName = fileName
    // Remove the "./_" from the beginning
    .replace(/^\.\/_?/, '')
    // Remove the file extension from the end
    .replace(/\.\w+$/, '')
    // Split up kebabs
    .split('-')
    // Upper case
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    // Concatenated
    .join('')

  console.log(`find component ${componentName},fileName : ${fileName}`);

  // Globally register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
});

}