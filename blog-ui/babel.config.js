/*
 * @Description: 
 * @Author: 张健66
 * @Date: 2021-08-09 15:47:27
 * @LastEditTime: 2021-08-10 22:32:58
 * @LastEditors: 张健66
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]

}
