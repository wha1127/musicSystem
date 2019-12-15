const { override, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');


module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //配置高阶装饰器 
  addDecoratorsLegacy()
);