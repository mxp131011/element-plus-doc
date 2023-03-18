# element-plus-doc README

`element-plus` 的一个工具插件,用于智能提示，悬停显示属性文档等等，整理至`element-plus` 2.3.0 的文档，后续`element-plus`更新，也会跟着更新，如未及时更新，请大家到[github](https://github.com/mxp131011/element-plus-doc)提交[issues](https://github.com/mxp131011/element-plus-doc/issues) 催促作者更新，有什么问题也请大家及时反馈，[github](https://github.com/mxp131011/element-plus-doc)访问不了也可到[gitee](https://gitee.com/mxp131011/element-plus-doc)提交[issues](https://gitee.com/mxp131011/element-plus-doc/issues)，或者加作者微信:mxp131011 或者反馈。如还有什么需求，也可提出(不考虑`element-plus`之外的需求)。

## 功能介绍

1. [下 划 线]：标签添加下划线，表示此标签可以显示悬浮文档，以及输入智能提示
2. [悬浮文档]：鼠标移动到`element-plus`组件的标签上会提示标签此标签的所有文档。
3. [悬浮文档]：鼠标移动到`element-plus`组件标签中的某条属性时仅显示该条属性的文档
4. [悬浮文档]：鼠标移动到`element-plus`组件标签中的`ref`属性时会显示此组件暴露出的所有方法
5. [智能提示]：`<template></template>`标签内输入`<el`或自定义前缀(如：`<base`)时会提示补全整个标签，如输入`<elbu`会补全`<el-button></el-button>`
6. [代码块智能提示]：`<template></template>`标签内输入`el`(不带`<`),会提示出定义好的代码块,如输入:`elt`会补全如下内容

   ```html
   <el-table :data="data" :scroll="{ x: 1200 }" :loading="loading" bordered rowKey="id" @change="changePage">
     <el-table-column label="id" prop="id" width="100"></el-table-column>
     <el-table-column label="name">
       <template slot-scope="scope">
         <span>{{ scope.$index + 1 }}、{{ scope.row.name }}</span>
       </template>
     </el-table-column>
     <el-table-column label="操作" width="100" fixed="right">
       <template slot-scope="scope">
         <el-button type="link" @click="toDo(scope.row)">修改</el-button>
       </template>
     </el-table-column>
   </el-table>
   ```

7. [代码块智能提示]：在`js`、`ts`文件中或则`vue`文件的`<script></script>`标签内输入对应的代码会补全完整的代码。如：输入`al`,会补全如下内容

   ```js
   ElMessageBox.alert('内容', '标题', {
     confirmButtonText: '确定',
     callback: (action) => {
       if (action === 'confirm') {
       }
     },
   });
   ```

8. 可在设置中设置自定义前缀，如 `base`,`my` 等等，以此前缀或 `le` 前缀开头的都视作 `element-plus` 组件。会添加相应悬浮文档（为了性能，不算 `el` 前缀，最多支持还可添加三个自定义前缀）
9. 如果自定义前缀还是无法满足需求，可以设置自定义映射组件，如：`<base-input-numb-for>` 组件想拥有 `<el-input>` 的文档或提示，则可在设置中配置：`{ baseInputNumbFor: 'elInput'` ，此时，`<base-input-numb-for>`就有了 `<el-input>` 的智能提示和此鼠标悬浮显示文档功能了
10. 可在设置中修改 `element-plus` 中/英官网的地址
11. 本插件仅支持中文和英文的提示文档，会根据 vscode 当前语言自动显示中文或英文的文档

### 示例图

1. 标签添加下划线 (图中所有有下划线的标签都支悬浮文档 和 持智能提示)

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_001.jpg)

2. 鼠标移动到`element-plus`组件的标签上会提示标签此标签的所有文档

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_002.jpg)

3. [悬浮文档]：鼠标移动到`element-plus`组件标签中的某条属性时仅显示该条属性的文档

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_003.jpg)

4. [悬浮文档]：鼠标移动到`element-plus`组件标签中的`ref`属性时会显示此组件暴露出的所有方法

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_004.jpg)

5. [智能提示]：`<template></template>`标签内输入`<el`或自定义前缀(如：`<base`)时会提示补全整个标签，如输入`<elbu`会补全`<el-button></el-button>`

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_005.jpg)

6. [代码块智能提示]：`<template></template>`标签内输入`el`(不带`<`),会提示出定义好的代码块

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_006.jpg)

7. [代码块智能提示]：在`js`、`ts`文件中或则`vue`文件的`<script></script>`标签内输入对应的代码会补全完整的代码。

   ![下划线](https://res.mxpkf.com/element-plus-doc/markdown/show_example_007.jpg)
