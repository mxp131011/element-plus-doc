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

### 所有支持的代码块智能提示

1. `<template></template>`或`<html></html>`内支持如下：

   ```json
   {
     "template": {
       "prefix": "template",
       "body": ["<template>", "  $1", "</template>"],
       "description": "模板"
     },
     "slot": {
       "prefix": "slot",
       "body": ["<slot name=\"$1\" />"],
       "description": "插槽"
     },
     "elbutton": {
       "prefix": "elbutt",
       "body": ["<el-button type=\"$1\" @click=\"$2\">$3</el-button>"],
       "description": "按钮组件"
     },
     "button": {
       "prefix": "el-button",
       "body": ["<el-button type=\"$1\" @click=\"$2\">$3</el-button>"],
       "description": "按钮组件"
     },
     "confirm": {
       "prefix": "el-confirm",
       "body": ["<el-button type=\"primary\" @click=\"confirm()\" :loading=\"confirmLoading\">确认</el-button>"],
       "description": "确认按钮组件"
     },
     "cancel": {
       "prefix": "el-cancel",
       "body": ["<el-button type=\"default\" @click=\"cancel()\">取消</el-button>"],
       "description": "取消按钮组件"
     },
     "link": {
       "prefix": "el-link",
       "body": ["<el-link type=\"$1\" href=\"$2\" target=\"_blank\">$3</el-link>"],
       "description": "路由跳转组件"
     },
     "scrollbar": {
       "prefix": "el-scrollbar",
       "body": ["<el-scrollbar height=\"$1\">", "$2", "</el-scrollbar>"],
       "description": "滚动条组件"
     },
     "space": {
       "prefix": "el-space",
       "body": ["<el-space wrap>", "$1", "</el-space>"],
       "description": "间距组件"
     },
     "autocomplete": {
       "prefix": "el-autocomplete",
       "body": [
         "<el-autocomplete",
         "  v-model=\"state\"",
         "  :fetch-suggestions=\"querySearch\"",
         "  clearable",
         "  class=\"inline-input w-50\"",
         "  placeholder=\"Please Input\"",
         "  @select=\"handleSelect\"",
         "/>"
       ],
       "description": "自动补全输入框组件"
     },
     "icon": {
       "prefix": "el-icon",
       "body": ["<i class=\"el-icon-$1\" />"],
       "description": "图标组件"
     },
     "tabs": {
       "prefix": "el-tabs",
       "body": ["<el-tabs v-model=\"activeKey\">", "  <el-tab-pane key=\"1\" tab=\"$1\">$2</el-tab-pane>", "</el-tabs>"],
       "description": "标签页组件"
     },
     "tab-pane": {
       "prefix": "el-tab-pane",
       "body": ["<el-tab-pane key=\"$1\" tab=\"$2\">$3</el-tab-pane>"],
       "description": "面包屑子组件"
     },
     "container": {
       "prefix": "el-container",
       "body": [
         "<el-container>",
         "  <el-aside width=\"200px\">Sider</el-aside>",
         "  <el-container>",
         "    <el-header>Header</el-header>",
         "    <el-main>main</el-main>",
         "    <el-footer>footer</el-footer>",
         "  </el-container>",
         "</el-container>"
       ],
       "description": "布局组件"
     },
     "aside": {
       "prefix": "el-aside",
       "body": ["<el-aside>aside</el-aside>"],
       "description": "布局侧边栏组件"
     },
     "header": {
       "prefix": "el-header",
       "body": ["<el-header>header</el-header>"],
       "description": "布局顶部组件"
     },
     "main": {
       "prefix": "el-main",
       "body": ["<el-main>main</el-main>"],
       "description": "布局内容组件"
     },
     "footer": {
       "prefix": "el-footer",
       "body": ["<el-footer>footer</el-footer>"],
       "description": "布局底部组件"
     },
     "breadcrumb": {
       "prefix": "el-breadcrumb",
       "body": [
         "<el-breadcrumb separator-class=\"el-icon-arrow-right\">",
         "  <el-breadcrumb-item :to=\"{ path: '/' }\">$1</el-breadcrumb-item>",
         "  <el-breadcrumb-item>$2</el-breadcrumb-item>",
         "  <el-breadcrumb-item>$3</el-breadcrumb-item>",
         "</el-breadcrumb>"
       ],
       "description": "面包屑组件"
     },
     "breadcrumb-item": {
       "prefix": "el-breadcrumb-item",
       "body": ["<el-breadcrumb-item>$1</el-breadcrumb-item>"],
       "description": "面包屑子组件"
     },
     "menu": {
       "prefix": "el-menu",
       "body": [
         "<el-menu :default-active=\"current\" mode=\"horizontal\">",
         "  <el-menu-item index=\"1\">$1</el-menu-item>",
         "  <el-menu-item index=\"2\">$2</el-menu-item>",
         "</el-menu>"
       ],
       "description": "菜单组件"
     },
     "submenu": {
       "prefix": "el-submenu",
       "body": [
         "<el-submenu>",
         "  <span slot=\"title\">$1</span>",
         "  <el-menu-item index=\"1\">$2</el-menu-item>",
         "  <el-menu-item index=\"2\">$3</el-menu-item>",
         "</el-submenu>"
       ],
       "description": "子菜单组件"
     },
     "menu-item": {
       "prefix": "el-menu-item",
       "body": ["<el-menu-item index=\"1\">$1</el-menu-item>"],
       "description": "菜单子组件"
     },
     "timeline": {
       "prefix": "el-timeline",
       "body": ["<el-timeline :reverse=\"false\">", "  <el-timeline-item>$1</el-timeline-item>", "  <el-timeline-item>$2</el-timeline-item>", "</el-timeline>"],
       "description": "时间轴组件"
     },
     "timeline-item": {
       "prefix": "el-timeline-item",
       "body": ["<el-timeline-item color=\"$1\">$2</el-timeline-item>"],
       "description": "时间轴子组件"
     },
     "collapse": {
       "prefix": "el-collapse",
       "body": ["<el-collapse v-model=\"activeKey\">", "  <el-collapse-item name=\"1\" title=\"$1\">$2</el-collapse-item>", "</el-collapse>"],
       "description": "折叠面板组件"
     },
     "collapse-item": {
       "prefix": "el-collapse-item",
       "body": ["<el-collapse-item name=\"$1\" title=\"$2\">$3</el-collapse-item>"],
       "description": "折叠面板子组件"
     },
     "descriptions": {
       "prefix": "el-descriptions",
       "body": ["<el-descriptions title=\"$1\">", "  <el-descriptions-item label=\"$2\">$3</el-descriptions-item>", "</el-descriptions>"],
       "description": "描述列表组件"
     },
     "descriptions-item": {
       "prefix": "el-descriptions-item",
       "body": ["<el-descriptions-item label=\"$1\">$2</el-descriptions-item>"],
       "description": "描述列表子组件"
     },
     "result": {
       "prefix": "el-result",
       "body": [
         "<el-result",
         "  icon=\"$1\"",
         "  title=\"$2\"",
         "  sub-title=\"$3\"",
         ">",
         "  <template slot=\"extra\">",
         "    $4",
         "  </template>",
         "</el-result>"
       ],
       "description": "结果组件"
     },
     "empty": {
       "prefix": "el-empty",
       "body": ["<el-empty description=\"$1\" />"],
       "description": "空状态组件"
     },
     "dropdown": {
       "prefix": "el-dropdown",
       "body": [
         "<el-dropdown>",
         "  <span>$1</span>",
         "  <el-dropdown-menu slot=\"dropdown\">",
         "    <el-dropdown-item>",
         "      $2",
         "    </el-dropdown-item>",
         "    <el-dropdown-item disabled>",
         "      $3",
         "    </el-dropdown-item>",
         "  </el-dropdown-menu>",
         "</el-dropdown>"
       ],
       "description": "下拉菜单父组件"
     },
     "dropdown-menu": {
       "prefix": "el-dropdown-menu",
       "body": [
         "<el-dropdown-menu>",
         "  <el-dropdown-item>",
         "    $1",
         "  </el-dropdown-item>",
         "  <el-dropdown-item disabled>",
         "    $2",
         "  </el-dropdown-item>",
         "</el-dropdown-menu>"
       ],
       "description": "下拉菜单子组件"
     },
     "dropdown-item": {
       "prefix": "el-dropdown-item",
       "body": ["<el-dropdown-item>", "  $1", "</el-dropdown-item>"],
       "description": "下拉菜单子组件"
     },
     "pagination": {
       "prefix": "el-pagination",
       "body": [
         "<el-pagination",
         "  background",
         "  :total=\"total\"",
         "  :page-size=\"100\"",
         "  :page-sizes=\"[10, 25, 50, 100]\"",
         "  layout=\"total, sizes, prev, pager, next, jumper\"",
         "  @current-change=\"handleCurrentChange\"",
         "  @size-change=\"handleSizeChange\"",
         "/>"
       ],
       "description": "分页组件"
     },
     "checkbox-group": {
       "prefix": "el-checkbox-group",
       "body": [
         "<el-checkbox-group v-model=\"value\">",
         "  <el-checkbox :label=\"$1\">",
         "    $2",
         "  </el-checkbox>",
         "  <el-checkbox :label=\"$3\">",
         "    $4",
         "  </el-checkbox>",
         "</el-checkbox-group>"
       ],
       "description": "多选框 el-checkbox形式编码"
     },
     "checkbox": {
       "prefix": "el-checkbox",
       "body": ["<el-checkbox v-model=\"checked\">$1</el-checkbox>"],
       "description": "复选框组件"
     },
     "radio-group": {
       "prefix": "el-radio-group",
       "body": [
         "<el-radio-group v-model=\"value\">",
         "  <el-radio :label=\"$1\">",
         "    $2",
         "  </el-radio>",
         "  <el-radio :label=\"$3\">",
         "    $4",
         "  </el-radio>",
         "</el-radio-group>"
       ],
       "description": "单选框组件 el-radio形式编码"
     },
     "radio": {
       "prefix": "el-radio",
       "body": ["<el-radio v-model=\"checked\" :label=\"$1\">$2</el-radio>"],
       "description": "复选框组件"
     },
     "badge": {
       "prefix": "el-badge",
       "body": ["<el-badge :value=\"count\">", "  $1", "</el-badge>"],
       "description": "徽标数组件"
     },
     "calendar": {
       "prefix": "el-calendar",
       "body": ["<el-calendar v-model=\"value\" />"],
       "description": "日历组件"
     },
     "image": {
       "prefix": "el-image",
       "body": ["<el-image :src=\"$1\" :fit=\"$2\" />"],
       "description": "图片组件"
     },
     "backtop": {
       "prefix": "el-backtop",
       "body": ["<el-backtop target=\"$1\" />"],
       "description": "返回顶部组件"
     },
     "card": {
       "prefix": "el-card",
       "body": ["<el-card>", "  <template slot=\"header\">", "    $1", "  </template>", "  $2", "</el-card>"],
       "description": "卡片组件"
     },
     "carousel": {
       "prefix": "el-carousel",
       "body": [
         "<el-carousel height=\"400\" autoplay :interval=\"3000\" @change=\"onChange\">",
         "  <el-carousel-item>$1</el-carousel-item>",
         "  <el-carousel-item>$2</el-carousel-item>",
         "</el-carousel>"
       ],
       "description": "走马灯组件"
     },
     "carousel-item": {
       "prefix": "el-carousel-item",
       "body": ["<el-carousel-item>$1</el-carousel-item>"],
       "description": "走马灯子组件"
     },
     "switch": {
       "prefix": "el-switch",
       "body": ["<el-switch v-model=\"value\" />"],
       "description": "开关组件"
     },
     "input": {
       "prefix": "el-input",
       "body": ["<el-input placeholder=\"$1\" v-model=\"value\" />"],
       "description": "输入框组件"
     },
     "select": {
       "prefix": "el-select",
       "body": [
         "<el-select v-model=\"value\" placeholder=\"$1\">",
         "  <el-option",
         "    v-for=\"item in options\"",
         "    :key=\"item.value\"",
         "    :label=\"item.label\"",
         "    :value=\"item.value\"",
         "   />",
         "</el-select>"
       ],
       "description": "下拉框组件"
     },
     "input-number": {
       "prefix": "el-input-number",
       "body": ["<el-input-number :min=\"$1\" :max=\"$2\" v-model=\"value\" :step=\"1\" />"],
       "description": "数字输入框组件"
     },
     "avatar": {
       "prefix": "el-avatar",
       "body": ["<el-avatar :size=\"$1\" :src=\"$2\" />"],
       "description": "头像组件"
     },
     "spin": {
       "prefix": "el-spin",
       "body": ["<el-spin :size=\"default\"/>"],
       "description": "加载中组件"
     },
     "divider": {
       "prefix": "el-divider",
       "body": ["<el-divider />"],
       "description": "分割线组件"
     },
     "skeleton": {
       "prefix": "el-skeleton",
       "body": ["<el-skeleton :rows=\"10\" />"],
       "description": "骨架屏组件"
     },
     "alert": {
       "prefix": "el-alert",
       "body": ["<el-alert type=\"$1\" title=\"$2\" closable />"],
       "description": "警告提示组件"
     },
     "popconfirm": {
       "prefix": "el-popconfirm",
       "body": [
         "<el-popconfirm",
         "  title=\"确认吗？\"",
         "  confirm-button-text=\"确认\"",
         "  cancel-button-text=\"取消\"",
         "  @confirm=\"confirm\"",
         "  @cancel=\"cancel\"",
         ">",
         "  <el-button type=\"link\">$1</el-button>",
         "</el-popconfirm>"
       ],
       "description": "气泡二次确认组件"
     },
     "popover": {
       "prefix": "el-popover",
       "body": ["<el-popover width=\"200\" title=\"$1\" content=\"$2\" trigger=\"hover\" placement=\"bottom\" >", "  $2", "</el-popover>"],
       "description": "气泡组件"
     },
     "tooltip": {
       "prefix": "el-tooltip",
       "body": ["<el-tooltip effect=\"dark\" content=\"$1\" placement=\"bottom\">", "  $2", "</el-tooltip>"],
       "description": "文字提示组件"
     },
     "tag": {
       "prefix": "el-tag",
       "body": ["<el-tag closable type=\"$1\">$2</el-tag>"],
       "description": "标签组件"
     },
     "slider": {
       "prefix": "el-slider",
       "body": ["<el-slider v-model=\"value\" :step=\"1\" />"],
       "description": "滑动输入条"
     },
     "progress": {
       "prefix": "el-progress",
       "body": ["<el-progress :percentage=\"$1\" :status=\"$2\" />"],
       "description": "进度条组件"
     },
     "time-select": {
       "prefix": "el-time-select",
       "body": ["<el-time-select v-model=\"value\" :picker-options=\"{ start: '00:00', step: '00:15', end: '24:00' }\" placeholder=\"$1\" />"],
       "description": "时间选择器"
     },
     "time-picker": {
       "prefix": "el-time-picker",
       "body": ["<el-time-picker v-model=\"value\" value-format=\"HH:mm:ss\" @change=\"getTime\" />"],
       "description": "时间选择器"
     },
     "date-picker": {
       "prefix": "el-date-picker",
       "body": ["<el-date-picker v-model=\"value\" type=\"datetime\" value-format=\"YYYY-MM-DD HH:mm:ss\" @change=\"getDate\" />"],
       "description": "日期选择器"
     },
     "range-picker": {
       "prefix": "el-date-picker",
       "body": ["<el-date-picker type=\"datetimerange\" v-model=\"value\" format=\"YYYY-MM-DD HH:mm:ss\" @change=\"getDateRange\" />"],
       "description": "日期范围选择器"
     },
     "rate": {
       "prefix": "el-rate",
       "body": ["<el-rate v-model=\"value\" :max=\"5\" allow-half />"],
       "description": "评分组件"
     },
     "color-picker": {
       "prefix": "el-color-picker",
       "body": ["<el-color-picker v-model=\"color\" show-alpha />"],
       "description": "颜色选择器"
     },
     "steps": {
       "prefix": "el-steps",
       "body": [
         "<el-steps :active=\"current\" direction=\"horizontal\" :status=\"status\">",
         "  <el-step title=\"标题\" description=\"描述\" />",
         "  <el-step>",
         "    <template slot=\"title\">",
         "      $1",
         "    </template>",
         "    <template slot=\"description\">",
         "      $2",
         "    </template>",
         "  </el-step>",
         "</el-steps>"
       ],
       "description": "步骤条组件"
     },
     "dialog": {
       "prefix": "el-dialog",
       "body": [
         "<el-dialog title=\"title\" width=\"600px\" :visible.sync=\"visible\" @close=\"onClose\">",
         "  <span slot=\"footer\" class=\"dialog-footer\">",
         "    <el-button size=\"small\" @click=\"handleCancel\">取 消</el-button>",
         "    <el-button size=\"small\" type=\"primary\" @click=\"handleOk\" :loading=\"confirmLoading\">确 定</el-button>",
         "  </span>",
         "</el-dialog>"
       ],
       "description": "弹窗组件"
     },
     "transfer": {
       "prefix": "el-transfer",
       "body": ["<el-transfer :data=\"data\" v-model=\"value\" />"],
       "description": "穿梭框组件"
     },
     "cascader": {
       "prefix": "el-cascader",
       "body": ["<el-cascader v-model=\"value\" :options=\"options\" placeholder=\"Please select\" @change=\"onChange\" />"],
       "description": "级联选择组件"
     },
     "cascader-panel": {
       "prefix": "el-cascader-panel",
       "body": ["<el-cascader-panel :options=\"options\" />"],
       "description": "级联选择面板组件"
     },
     "upload": {
       "prefix": "el-upload",
       "body": [
         "<el-upload",
         "  name=\"file\"",
         "  multiple",
         "  :file-list=\"fileList\"",
         "  :action=\"uploadUrl\"",
         "  :on-preview=\"preview\"",
         "  :on-remove=\"remove\"",
         "  :on-exceed=\"handleExceed\"",
         "  :before-remove=\"beforeRemove\"",
         "  :limit=\"3\"",
         ">",
         "  <el-button size=\"small\" type=\"primary\">点击上传</el-button>",
         "  <div slot=\"tip\" class=\"el-upload__tip\">只能上传jpg/png文件，且不超过500kb</div>",
         "</el-upload>"
       ],
       "description": "上传文件组件"
     },
     "drawer": {
       "prefix": "el-drawer",
       "body": [
         "<el-drawer",
         "  title=\"Title\"",
         "  direction=\"rtl\"",
         "  show-close",
         "  :visible.sync=\"visible\"",
         "  :before-close=\"close\"",
         ">",
         "  <p>$1</p>",
         "</el-drawer>"
       ],
       "description": "抽屉组件"
     },
     "tree": {
       "prefix": "el-tree",
       "body": ["<el-tree :data=\"data\" :props=\"defaultProps\" @node-click=\"handleNodeClick\" />"],
       "description": "树形结构组件"
     },
     "tree-select": {
       "prefix": "el-tree-select",
       "body": ["<el-tree-select", "  v-model=\"value\"", "  :data=\"data\"", "  :render-after-expand=\"true\"", "  show-checkbox", ">"],
       "description": "树形选择器组件"
     },
     "page-header": {
       "prefix": "el-page-header",
       "body": ["<el-page-header content=\"$1\" @back=\"\\$router.back()\" />"],
       "description": "页头组件"
     },
     "table": {
       "prefix": "el-table",
       "body": [
         "<el-table",
         "  :data=\"data\"",
         "  :scroll=\"{ x: 1200 }\"",
         "  :loading=\"loading\"",
         "  bordered",
         "  rowKey=\"id\"",
         "  @change=\"changePage\"",
         ">",
         "  <el-table-column label=\"id\" prop=\"id\" width=\"100\"></el-table-column>",
         "  <el-table-column label=\"name\">",
         "    <template slot-scope=\"scope\">",
         "      <span>{{ scope.\\$index + 1 }}、{{ scope.row.name }}</span>",
         "    </template>",
         "  </el-table-column>",
         "  <el-table-column label=\"操作\" width=\"100\" fixed=\"right\">",
         "    <template slot-scope=\"scope\">",
         "      <el-button type=\"link\" @click=\"toDo(scope.row)\">修改</el-button>",
         "    </template>",
         "  </el-table-column>",
         "</el-table>"
       ],
       "description": "表格组件"
     },
     "form": {
       "prefix": "el-form",
       "body": [
         "<el-form ref=\"form\" :model=\"form\" :rules=\"rules\" :label-width=\"80px\">",
         "  <el-form-item label=\"姓名\" prop=\"name\">",
         "    <el-input placeholder=\"请填写姓名\" :maxLength=\"20\" v-model=\"form.name\" />",
         "  </el-form-item>",
         "  <el-form-item label=\"性别\" prop=\"sex\">",
         "    <el-select placeholder=\"请选择性别\" :options=\"[{ label: '男', value: '男' }, { label: '女', value: '女' }]\" v-model=\"form.sex\" />",
         "  </el-form-item>",
         "</el-form>"
       ],
       "description": "表单组件"
     },
     "form-item": {
       "prefix": "el-form-item",
       "body": ["<el-form-item label=\"$1\" prop=\"$2\">", "  $3", "</el-form-item>"],
       "description": "表单子组件"
     },
     "row": {
       "prefix": "el-row",
       "body": ["<el-row :gutter=\"0\">", "  <el-col :span=\"12\">$1</el-col>", "  <el-col :span=\"12\">$2</el-col>", "</el-row>"],
       "description": "栅格布局组件"
     },
     "col": {
       "prefix": "el-col",
       "body": ["<el-col :span=\"$1\">$2<el-col>"],
       "description": "栅格布局子组件"
     }
   }
   ```

1. 在`js`、`ts`文件中或则`vue`文件的`<script></script>`标签内，支持如下

   ```json
   {
     "ElMessage.success": {
       "prefix": "success",
       "body": ["ElMessage.success({", "  message: '$1',", "  showClose: true,", "});"],
       "description": "ElMessage.success"
     },
     "ElMessage.info": {
       "prefix": "info",
       "body": ["ElMessage.info({", "  message: '$1',", "  showClose: true,", "});"],
       "description": "ElMessage.info"
     },
     "ElMessage.error": {
       "prefix": "error",
       "body": ["ElMessage.error({", "  message: '$1',", "  showClose: true,", "});"],
       "description": "ElMessage.error"
     },
     "ElMessage.warning": {
       "prefix": "warning",
       "body": ["ElMessage.warning({", "  message: '$1',", "  showClose: true,", "});"],
       "description": "ElMessage.warning"
     },
     "ElMessageBox.alert": {
       "prefix": "alert",
       "body": [
         "ElMessageBox.alert('内容', '标题', {",
         "  confirmButtonText: '确定',",
         "  callback: action => {",
         "    if (action === 'confirm') {",
         "      $1",
         "    }",
         "  }",
         "});"
       ],
       "description": "ElMessageBox.alert"
     },
     "ElMessageBox.confirm": {
       "prefix": "confirm",
       "body": [
         "ElMessageBox.confirm('内容', '标题', {",
         "  {",
         "     confirmButtonText: '确定'",
         "     cancelButtonText: '取消'",
         "  }",
         "}).then(() => {",
         "  $1",
         "}).catch(() => {",
         "  ",
         "});"
       ],
       "description": "ElMessageBox.confirm"
     },
     "ElMessageBox.prompt": {
       "prefix": "prompt",
       "body": [
         "ElMessageBox.prompt('内容', '标题', {",
         "  {",
         "     confirmButtonText: '确定'",
         "     cancelButtonText: '取消'",
         "  }",
         "}).then(() => {",
         "  $1",
         "}).catch(() => {",
         "  ",
         "});"
       ],
       "description": "ElMessageBox.prompt"
     },
     "ElNotification.success": {
       "prefix": "success",
       "body": ["ElNotification.success({", "  title: '成功',", "  message: '$1',", "});"],
       "description": "ElNotification.success"
     },
     "ElNotification.warning": {
       "prefix": "warning",
       "body": ["ElNotification.warning({", "  title: '警告',", "  message: '$1',", "});"],
       "description": "ElNotification.warning"
     },
     "ElNotification.info": {
       "prefix": "info",
       "body": ["ElNotification.info({", "  title: '温馨提示',", "  message: '$1',", "});"],
       "description": "ElNotification.info"
     },
     "ElNotification.error": {
       "prefix": "error",
       "body": ["ElNotification.error({", "  title: '错误',", "  message: '$1',", "});"],
       "description": "ElNotification.error"
     }
   }
   ```
