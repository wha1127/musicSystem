const { override, fixBabelImports, addLessLoader ,addDecoratorsLegacy} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //  addLessLoader({
  //    javascriptEnabled: true,
  //    modifyVars: { '@primary-color': '#1DA57A' },
  //  }),
 // 高阶组件的使用----es7语法转js代码---babel的设置
 addDecoratorsLegacy()
);