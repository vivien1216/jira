/*
 * @Author: vivien
 * @Date: 2022-05-04 17:54:18
 * @Last Modified by: vivien
 * @LastEditTime: 2022-05-04 17:56:57
 */
const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0, 82, 204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
