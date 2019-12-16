const rewireStyl = require("react-app-rewire-stylus-modules");
const { override, fixBabelImports, addDecoratorsLegacy,addLessLoader } = require('customize-cra');

// module.exports = function override(config, env,) {
  
//   config = rewireStyl(config, env);
  
//   // with loaderOptions
//   // (not yet implemented)
//   // config = rewireStyl.withLoaderOptions({
//   //     modifyVars: {
//   //       "@primary-color": "#1890ff",
//   //     },
//   //   })(config, env);
//   // fixBabelImports('import', {
//   //    libraryName: 'antd-mobile',
//   //    style: 'css',
//   //  })
//   //  addDecoratorsLegacy()
//    return config;
// };

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
   addLessLoader({
   javascriptEnabled: true,
 }),
  addDecoratorsLegacy()
);